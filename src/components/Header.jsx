import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="Logo showing a bag of money with a dollar sign and coins surrounding it"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
