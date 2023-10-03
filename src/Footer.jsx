import React from "react"
import github from "../src/assets/github-logo.png"
import instagram from "../src/assets/instagram-logo.png"



function Footer() {
    return (
      <footer>
        <p>
          Projeto desenvolvido por @SrMaverick. Código livre, não esqueça os
          créditos...
        </p>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/SrMaverick" target="_blank">
                <img src={github} alt="github" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/michaelldouglaz?igshid=YTQwZjQ0NmI0OA=="
                target="_blank"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
  export default Footer;
  