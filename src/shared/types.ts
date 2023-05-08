export enum SelectedPage {
  Home = "home",
  Products = "tickets",
  Company = "fareprices",
  ContactUs = "faqs",
  Register = "register",
  SignUp = "signUp"
}

export enum SelectedTabs {
  BuyTickets = "home",
  FarePrices = "fareprices",
  Stories = "stories",
  Faqs = "faqs",
  Resources = "resources",
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
