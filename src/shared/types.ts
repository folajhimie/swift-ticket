export enum SelectedPage {
  Home = "home",
  Products = "tickets",
  Company = "fareprices",
  ContactUs = "faqs",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
