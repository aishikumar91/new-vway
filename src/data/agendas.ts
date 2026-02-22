import {
  Wrench, GraduationCap, HeartPulse, Scale, Droplets, Leaf, Stethoscope,
} from "lucide-react";
import skillsSewingMachines from "@/assets/skills-sewing-machines.jpg";
import communityEngagement from "@/assets/community-engagement.jpg";
import healthMaternal from "@/assets/health-maternal.jpg";
import eventCertificates from "@/assets/event-certificates.jpg";
import skillsInclusion from "@/assets/skills-inclusion.jpg";
import communityAgriculture from "@/assets/community-agriculture.jpg";
import communityElderly from "@/assets/community-elderly.jpg";

export const agendas = [
  {
    icon: Wrench,
    number: "1",
    title: "Free Skill Acquisition & Agricultural Innovation",
    shortTitle: "Free Skill Acquisition",
    description: "Youth unemployment fuels poverty, insecurity, and migration pressures. VHAY provides 15 digital and vocational skills completely free of charge. In 2023 alone, about 1,000 youths were empowered through free skill acquisition, production equipment distribution, and agricultural innovation support.",
    outcomes: [
      "Laptops for tech graduates",
      "Sewing machines for fashion designers",
      "Baking equipment for pastry entrepreneurs",
      "Climate-resilient farming training",
      "Agribusiness value-chain development",
      "Youth-led agricultural enterprises",
    ],
    highlight: "Agriculture becomes enterprise — not subsistence.",
    image: skillsSewingMachines,
    fullContent: "VHAY's flagship program addresses one of Africa's most pressing challenges: youth unemployment. By providing 15+ free digital and vocational skills — from web development and graphic design to fashion, catering, and agribusiness — we equip young Africans with the tools to build sustainable livelihoods.\n\nIn 2023, approximately 1,000 youths were empowered through this program. Graduates received production equipment including laptops, sewing machines, baking ovens, and agricultural tools. Our agricultural innovation track teaches climate-resilient farming, agribusiness value-chain development, and sustainable food production.\n\nThe program operates across 14 African countries and 28 Nigerian states, with plans to expand to all 54 African nations. Each cohort undergoes 3-6 months of intensive training, mentorship, and business development support before receiving their startup equipment.",
  },
  {
    icon: GraduationCap,
    number: "2",
    title: "Education for Out-of-School Children",
    shortTitle: "Education for Children",
    description: "Nigeria has one of the highest out-of-school child populations globally — estimated at over 10 million children (UNICEF). The consequences include poverty cycles, child labor, increased vulnerability to extremism, and reduced national productivity.",
    outcomes: [
      "Scholarship programs",
      "Reintegration into formal education",
      "Learning materials support",
      "Community-based educational advocacy",
    ],
    highlight: "Education is economic infrastructure. Every child restored to school increases Africa's long-term GDP potential.",
    image: communityEngagement,
    fullContent: "With over 10 million children out of school in Nigeria alone (UNICEF), the education crisis represents one of Africa's most significant development challenges. VHAY's education agenda tackles this through scholarship programs, community-based advocacy, and direct reintegration support.\n\nOur approach includes providing school fees, uniforms, learning materials, and transportation for children from the most vulnerable households. We work with local communities to address cultural barriers to education, particularly for girls.\n\nThe program also includes digital literacy components, ensuring children are prepared for the 21st-century economy. We partner with schools, government agencies, and international organizations to maximize our impact and ensure sustainable educational outcomes.",
  },
  {
    icon: HeartPulse,
    number: "3",
    title: "Maternal & Newborn Health Program",
    shortTitle: "Maternal & Newborn Health",
    description: "Africa accounts for roughly 70% of global maternal deaths (WHO). Many result from lack of prenatal care, inadequate skilled birth attendance, financial barriers, and limited rural health access.",
    outcomes: [
      "Financial support for prenatal and postnatal care",
      "Access to skilled delivery services",
      "Essential newborn care packages",
      "Community maternal health awareness",
      "Partnerships with healthcare providers",
    ],
    highlight: "Healthy mothers produce healthy generations.",
    image: healthMaternal,
    fullContent: "Africa accounts for approximately 70% of global maternal deaths (WHO), a tragic statistic driven by lack of prenatal care, inadequate skilled birth attendance, financial barriers, and limited rural health access. VHAY's Maternal & Newborn Health Program directly addresses these challenges.\n\nWe provide financial support for prenatal and postnatal care, ensuring mothers can access quality healthcare regardless of their economic status. Our partnerships with healthcare providers enable access to skilled delivery services in both urban and rural settings.\n\nEach mother in our program receives an essential newborn care package including basic medical supplies, nutritional supplements, and educational materials on infant care. Community health workers trained by VHAY conduct door-to-door awareness campaigns on maternal health best practices.",
  },
  {
    icon: Scale,
    number: "4",
    title: "Prison Bailout & Rehabilitation",
    shortTitle: "Prison Bailout & Rehab",
    description: "Across Nigeria and parts of Africa, a significant proportion of inmates are awaiting trial. Many remain incarcerated due to inability to meet bail conditions — overcrowded facilities, financial incapacity, and legal ignorance.",
    outcomes: [
      "Legal support assistance",
      "Bail payment for indigent inmates",
      "3-month intensive skill acquisition program",
      "Equipment distribution upon completion",
      "Leadership & character transformation training",
    ],
    highlight: "Rehabilitation transforms former inmates into entrepreneurs — not returnees to crime.",
    image: eventCertificates,
    fullContent: "Nigeria's prison system faces severe overcrowding, with a significant proportion of inmates being awaiting-trial detainees who cannot afford bail. VHAY's Prison Bailout & Rehabilitation program intervenes at two critical points: securing release and ensuring successful reintegration.\n\nWe provide legal assistance and bail payment for indigent inmates who have been detained for minor offenses. Upon release, participants enter a 3-month intensive skill acquisition program covering vocational trades, digital skills, and entrepreneurship fundamentals.\n\nGraduates receive production equipment to start their own businesses, along with ongoing mentorship and character development training. Our rehabilitation success rate demonstrates that with the right support, former inmates become productive entrepreneurs rather than returning to crime.",
  },
  {
    icon: Droplets,
    number: "5",
    title: "Sickle Cell Empowerment Program",
    shortTitle: "Sickle Cell Empowerment",
    description: "Nigeria bears one of the highest global burdens of sickle cell disorder, with approximately 150,000 affected births annually (WHO). Many face physical limitations, employment barriers, and financial instability.",
    outcomes: [
      "Flexible skill acquisition programs",
      "Home-based entrepreneurship training",
      "Equipment provision",
      "Support for caregivers and families",
    ],
    highlight: "We call them 'Power Blood Cell Warriors.' Empowerment restores dignity.",
    image: skillsInclusion,
    fullContent: "Nigeria has one of the highest global burdens of sickle cell disorder, with approximately 150,000 affected births annually (WHO). People living with sickle cell disease face unique challenges including frequent health crises, physical limitations, employment barriers, and social stigma.\n\nVHAY's Sickle Cell Empowerment Program — which we call the 'Power Blood Cell Warriors' initiative — provides flexible skill acquisition programs designed around the health needs of participants. Training schedules accommodate hospital visits and health crises.\n\nOur home-based entrepreneurship training enables warriors to build sustainable businesses from home, reducing physical strain while maximizing economic independence. Each participant receives equipment and startup support tailored to their chosen skill and physical capabilities.",
  },
  {
    icon: Leaf,
    number: "6",
    title: "Climate Change, Smart Agriculture & Blue Economy",
    shortTitle: "Climate & Blue Economy",
    description: "Although Africa contributes less than 4% of global carbon emissions, it is among the most climate-vulnerable regions. VHAY trains youth in smart agriculture, sustainable fisheries, aquaculture, and environmental photography.",
    outcomes: [
      "Climate-resilient crop education",
      "Sustainable fisheries & aquaculture",
      "Marine transport & coastal tourism",
      "Agritech digital literacy",
      "Environmental advocacy & photography",
      "Youth agribusiness incubation",
    ],
    highlight: "Climate resilience becomes youth opportunity.",
    image: communityAgriculture,
    fullContent: "Despite contributing less than 4% of global carbon emissions, Africa is among the most climate-vulnerable continents. VHAY's Climate Change, Smart Agriculture & Blue Economy agenda transforms this challenge into opportunity for young Africans.\n\nOur smart agriculture program teaches climate-resilient farming techniques, precision agriculture, and agritech digital tools. Youth learn to build sustainable food systems that can withstand changing weather patterns while generating profitable enterprises.\n\nThe Blue Economy component covers sustainable fisheries, aquaculture, marine transport, and coastal tourism. We also train environmental advocates and photographers who document and communicate Africa's climate realities to global audiences. Youth agribusiness incubation provides startup capital and mentorship for the most promising agricultural enterprises.",
  },
  {
    icon: Stethoscope,
    number: "7",
    title: "Free Healthcare Services for the Elderly",
    shortTitle: "Elderly Healthcare",
    description: "Africa's traditional culture honors elders, yet economic realities have weakened structured elderly support systems. Non-communicable diseases disproportionately affect older adults.",
    outcomes: [
      "Free medical outreach programs",
      "Chronic disease screening",
      "Medication assistance",
      "Vision and hearing support",
      "Intergenerational community engagement",
    ],
    highlight: "No elder who built society should suffer neglect in old age.",
    image: communityElderly,
    fullContent: "Africa's traditional culture deeply honors elders, yet rapid urbanization and economic pressures have weakened structured elderly support systems. Non-communicable diseases including diabetes, hypertension, and cardiovascular conditions disproportionately affect older adults who often cannot afford treatment.\n\nVHAY's Free Healthcare Services for the Elderly program conducts regular medical outreach events providing free health screenings, chronic disease management, medication distribution, and specialist consultations. Our vision and hearing support program provides corrective lenses and hearing aids to seniors.\n\nThe intergenerational community engagement component brings youth volunteers together with elderly community members, fostering mutual respect and ensuring that traditional knowledge is preserved while elders receive the care and companionship they deserve.",
  },
];
