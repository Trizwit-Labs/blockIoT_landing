import { Feature } from "@/types/feature";
import signUpIcon from "/images/about/signup.png";

const featuresData: Feature[] = [
  {
    id: 1,
    icon:  <img src={"/images/about/signup.png"} alt="Sign Up Icon" />,
    title: "1. Sign up for BlockIoT",
    paragraph:
      "The first step to using our powerful IoT backend services is to sign up for BlockIoT. Simply visit our website and create an account. You'll have access to our customisable IoT broker and user-friendly dashboard in no time.",
  },
  {
    id: 1,
    icon:  <img src={"/images/about/setup.png"} alt="Sign Up Icon" />,
    title: "2. Set up your customised IoT broker",
    paragraph:
      "Once you've created your account, it's time to set up your customised IoT broker. With our platform, you can tailor your server to your exact needs. Choose from a range of features and settings to create a server that works for you. And if you ever need to make changes, you can easily do so from our user-friendly dashboard.",
  },
  {
    id: 1,
    icon:  <img src={"/images/about/link.png"} alt="Sign Up Icon" />,
    title: "3. Connect your IoT devices",
    paragraph:
      "Now that your IoT broker is up and running, it's time to connect your IoT devices. Our platform supports a range of protocols and devices, so you can be confident that your devices will work seamlessly with our backend services. And if you ever encounter any issues, our support team is always here to help.",
  },
  {
    id: 1,
    icon:  <img src={"/images/about/monitor.png"} alt="Sign Up Icon" />,
    title: "4. Monitor and manage your IoT servers",
    paragraph:
      "With our super cool dashboard interface, you can easily monitor and manage your IoT servers. Even if you don't have much technical knowledge, you'll find our dashboard to be intuitive and easy to use. You can keep an eye on your devices, manage your settings, and make changes as needed.",
  },
  {
    id: 1,
    icon:  <img src={"/images/about/scale1.png"} alt="Sign Up Icon" />,
    title: "5. Scale your infrastructure as needed",
    paragraph:
      "As your IoT product grows, so does our platform. Our scalable infrastructure means you can easily add more devices and users as needed. And if you need to make any changes to your server configuration, you can do so without any downtime.",
  },
  
];
export default featuresData;
