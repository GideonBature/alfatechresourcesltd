export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p: string) => `${basePath}${p}`;

export const company = {
  name: "Alfatech Resources Ltd",
  short: "Alfatech",
  rc: "RC 8899213",
  address: "Phil Nwachukwu Crescent, Mega Bond Estate, Gwarinpa, FCT, Abuja, Nigeria.",
  registered: "Phil Nwachukwu Crescent, Mega Bond Estate, Gwarinpa, Abuja, FCT",
  email: "alfaresourcesltd@gmail.com",
  phoneDisplay: "+234 802 357 9686",
  phoneTel: "+2348023579686",
  whatsapp: "2348023579686",
};

export type Category = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  image: string;
  items: string[];
};

export const categories: Category[] = [
  {
    id: "office",
    index: "01",
    title: "Office Furniture & Equipment",
    blurb: "Workspaces that look sharp and last — from single desks to full-floor fit-outs.",
    image: "/images/office.jpg",
    items: [
      "Office furniture accessories",
      "Filing cabinets & storage systems",
      "Office desks & chairs",
      "Paper shredders",
      "Laminating machines",
      "Binding machines",
    ],
  },
  {
    id: "stationery",
    index: "02",
    title: "Stationery & Consumables",
    blurb: "Everyday supplies, reliably stocked and delivered on schedule.",
    image: "/images/laptop-keys.jpg",
    items: [
      "Printing papers (A4, A3, specialty)",
      "Pens, markers & writing materials",
      "Notebooks & office pads",
      "Envelopes & files",
      "Toners & ink cartridges",
      "General office consumables",
    ],
  },
  {
    id: "computers",
    index: "03",
    title: "Computers & IT Equipment",
    blurb: "Desktops, laptops and the accessories that keep teams productive.",
    image: "/images/desktop.jpg",
    items: [
      "Desktop computers",
      "Laptop computers",
      "Computer accessories (keyboard, mouse, UPS)",
      "Networking devices",
      "External storage devices",
      "IT support accessories",
    ],
  },
  {
    id: "printers",
    index: "04",
    title: "Printers & Copiers",
    blurb: "Print, scan and copy hardware with the accessories to maintain it.",
    image: "/images/computing.jpg",
    items: [
      "Laser printers",
      "Inkjet printers",
      "Multi-function printers (print, scan, copy)",
      "Photocopiers",
      "Scanner machines",
      "Printer maintenance accessories",
    ],
  },
  {
    id: "security",
    index: "05",
    title: "Security & Surveillance",
    blurb: "Supply, professional installation and maintenance of protective systems.",
    image: "/images/cctv-range.jpg",
    items: [
      "CCTV cameras (indoor & outdoor)",
      "DVR / NVR systems",
      "Access control systems",
      "Biometric devices",
      "Intercom systems",
      "Installation & maintenance services",
    ],
  },
  {
    id: "electronics",
    index: "06",
    title: "Electronics & Power",
    blurb: "Backup power and display technology for modern workplaces.",
    image: "/images/solar-system.jpg",
    items: [
      "Inverters & power backup systems",
      "Solar accessories",
      "Televisions & display systems",
      "Projectors",
      "Communication devices",
      "Smart office gadgets",
    ],
  },
];

export const sectors = [
  "Government Agencies",
  "Corporate Organizations",
  "Educational Institutions",
  "Financial Institutions",
  "Hotels & Hospitality",
  "SMEs & Private Enterprises",
];

export const reasons = [
  { t: "Genuine, high-quality products", d: "Every item is sourced for durability and value, so you buy once." },
  { t: "Professional installation", d: "Security and IT systems are fitted and commissioned by competent hands." },
  { t: "Prompt nationwide delivery", d: "Orders move on schedule to wherever your offices are in Nigeria." },
  { t: "After-sales support", d: "Maintenance and follow-up that continues once the invoice is paid." },
  { t: "Committed to your satisfaction", d: "Long-term relationships built on dependable products and responsive service." },
];

export const values = [
  "Integrity & Transparency",
  "Quality Assurance",
  "Customer Satisfaction",
  "Innovation",
  "Timely Delivery",
  "Professional Excellence",
];

export const credentials = [
  { k: "CAC", t: "Incorporated", d: "Private company limited by shares, RC 8899213 (October 2025)" },
  { k: "BPP", t: "Interim Registration", d: "Bureau of Public Procurement IRR, valid to 31 Dec 2026" },
  { k: "FIRS", t: "Tax Clearance", d: "Tax Clearance Certificate, valid to 31 Dec 2026" },
  { k: "NSITF", t: "Compliant", d: "Also compliant with NRS, PENCOM and ITF" },
];

export const steps = [
  { t: "Enquire", d: "Tell us what you need — a single item or a full specification list." },
  { t: "Quote", d: "Receive a clear, competitive quotation with no guesswork." },
  { t: "Supply & install", d: "We deliver nationwide and install where the product requires it." },
  { t: "Support", d: "After-sales service and maintenance keep everything running." },
];
