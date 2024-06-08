import React from "react";
import { Footer } from "flowbite-react";

const MovieFooter = () => {
  return (
    <div>
      <div className=" dark:bg-slate-800 bg-white">
        <Footer container>
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <Footer.Brand
                href="https://flowbite.com"
                src="data:image/png;base64,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"
                alt="Flowbite Logo"
                name="My Movie App"
              />
              <Footer.LinkGroup>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <Footer.Copyright href="#" by="MyMovieApp" year={2022} />
          </div>
        </Footer>
      </div>
    </div>
  );
};

export default MovieFooter;
