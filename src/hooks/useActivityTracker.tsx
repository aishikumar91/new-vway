import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

async function getGeoData() {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function getDeviceInfo() {
  const ua = navigator.userAgent;
  const isMobile = /Mobi|Android/i.test(ua);
  const isTablet = /Tablet|iPad/i.test(ua);
  const device = isTablet ? "tablet" : isMobile ? "mobile" : "desktop";

  let browser = "unknown";
  if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Edg")) browser = "Edge";
  else if (ua.includes("Chrome")) browser = "Chrome";
  else if (ua.includes("Safari")) browser = "Safari";

  let os = "unknown";
  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Mac")) os = "macOS";
  else if (ua.includes("Linux")) os = "Linux";
  else if (ua.includes("Android")) os = "Android";
  else if (/iPhone|iPad/.test(ua)) os = "iOS";

  return { device, browser, os };
}

let sessionId: string | null = null;

function getSessionId() {
  if (sessionId) return sessionId;
  const stored = sessionStorage.getItem("vhay_session_id");
  if (stored) { sessionId = stored; return stored; }
  sessionId = crypto.randomUUID();
  sessionStorage.setItem("vhay_session_id", sessionId);
  return sessionId;
}

export function useActivityTracker() {
  const location = useLocation();
  const geoRef = useRef<any>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    getGeoData().then(geo => { geoRef.current = geo; });
  }, []);

  useEffect(() => {
    startTimeRef.current = Date.now();
    const sid = getSessionId();
    const { device, browser, os } = getDeviceInfo();

    const log = async () => {
      try {
        const geo = geoRef.current;
        await supabase.from("activity_logs").insert({
          session_id: sid,
          page_path: location.pathname,
          page_title: document.title,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent,
          device_type: device,
          browser,
          os,
          screen_width: window.innerWidth,
          screen_height: window.innerHeight,
          ip_address: geo?.ip || null,
          country: geo?.country_name || null,
          city: geo?.city || null,
          region: geo?.region || null,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: navigator.language,
        });
      } catch {
        // Silently fail — tracking should never break the app
      }
    };

    const timer = setTimeout(log, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);
}

export async function logAuditEvent(
  action: string,
  resource_type: string,
  resource_id: string | null = null,
  details: Record<string, any> = {},
) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from("audit_logs").insert({
      user_id: user?.id || null,
      user_email: user?.email || null,
      action,
      resource_type,
      resource_id,
      details,
      ip_address: null,
    });
  } catch {
    // Silently fail
  }
}
