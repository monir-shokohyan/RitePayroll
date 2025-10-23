import { IconType } from "react-icons";
import { FaLaptop, FaMobileAlt, FaCloudDownloadAlt,FaGlobe  } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import { FaCloud, FaCartShopping, FaComputer } from "react-icons/fa6";

interface Service {
  icon: IconType,
  title: string;
  description: string;
  seo: {
    title: string;
    description: string;
  };
}

export const servicesMap: Service[] = [
  {
    icon: FaLaptop ,
    title: "Custom Software Development",
    description: "Tailor-made ERP, CRM, and workflow systems designed to fit unique business processes.",
    seo: {
      title: "Custom Software Development Uganda",
      description: "Tailor-made ERP, CRM, and workflow systems designed to fit unique business processes."
    }
  },
  {
    icon: FaMobileAlt,
    title: "Custom Mobile Application Development",
    description: "Develop Android and iOS apps that improve business mobility and customer engagement.",
    seo: {
      title: "Custom Mobile Application Development Uganda",
      description: "Develop Android and iOS apps that improve business mobility and customer engagement."
    }
  },
  {
    icon: MdTouchApp,
    title: "URA EFRIS Integration",
    description: "Comprehensive EFRIS fiscalization setup, invoice automation, and system synchronization.",
    seo: {
      title: "URA EFRIS Integration Uganda",
      description: "Comprehensive EFRIS fiscalization setup, invoice automation, and system synchronization."
    }
  },
  {
    icon: FaCloudDownloadAlt,
    title: "Tally Customization & Cloud Services",
    description: "Enhance Tally Prime with local compliance, custom modules, and remote access.",
    seo: {
      title: "Tally Customization & Cloud Services Uganda",
      description: "Enhance Tally Prime with local compliance, custom modules, and remote access."
    }
  },
  {
    icon: FaCloud,
    title: "Cloud Hosting & Backup",
    description: "Secure hosting environments with regular data backup and recovery solutions.",
    seo: {
      title: "Cloud Hosting & Backup Uganda",
      description: "Secure hosting environments with regular data backup and recovery solutions."
    }
  },
  {
    icon: FaGlobe,
    title: "Website Development & Hosting",
    description: "Responsive, SEO-optimized websites with integrated hosting and maintenance.",
    seo: {
      title: "Website Development & Hosting Uganda",
      description: "Responsive, SEO-optimized websites with integrated hosting and maintenance."
    }
  },
  {
    icon: FaCartShopping,
    title: "E-Commerce Integrations",
    description: "Shopify and WooCommerce integrations to sync your online store with accounting & inventory.",
    seo: {
      title: "E-Commerce Integrations Uganda",
      description: "Shopify and WooCommerce integrations to sync your online store with accounting & inventory."
    }
  },
  {
    icon: FaComputer,
    title: "IT Infrastructure & Hardware Solutions",
    description: "Lotus provides enterprise-grade hardware solutions: HP & DELL servers, SOPHOS firewalls, POS systems, laptops, and antivirus solutions.",
    seo: {
      title: "E-Commerce Integrations Uganda",
      description: "Shopify and WooCommerce integrations to sync your online store with accounting & inventory."
    }
  }
];