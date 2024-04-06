import { Footer } from "flowbite-react";

const Foot = () => {
    return (
        <Footer container className="mt-20">
          <Footer.Copyright href="#" by="Anonimo™" year={2024} />
          <Footer.LinkGroup>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="/contact">Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      );
    }

export default Foot