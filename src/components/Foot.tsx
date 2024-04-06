import { Footer } from "flowbite-react";

const Foot = () => {
    return (
        <Footer container>
          <Footer.Copyright href="#" by="Anonimo™" year={2022} />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      );
    }

export default Foot