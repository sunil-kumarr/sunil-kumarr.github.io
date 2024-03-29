import React from "react";
import { SiGithub, SiLinkedin, SiMedium, SiTelegram } from "react-icons/si";

const PageFooter = () => (
  <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl">
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-between ">
        <span class="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/kumar-sunil/"
            class="hover:underline text-gray-500"
          >
            Sunil Kumar
          </a>
          . All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 justify-center lg:justify-end">
          <a
            href="https://www.linkedin.com/in/kumar-sunil/"
            target="_blank"
            class="text-gray-500 hover:text-blue-700 dark:hover:text-white"
          >
            <SiLinkedin size={30} />
          </a>
          <a
            href="https://github.com/sunil-cred"
            target="_blank"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <SiGithub size={30} />
          </a>
          <a
            href="https://sunil-kumarr.medium.com/"
            target="_blank"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <SiMedium size={30} />
          </a>
          <a
            href="https://t.me/sunilkumarrdev"
            target="_blank"
            class="text-gray-500 hover:text-blue-400 dark:hover:text-white"
          >
            <SiTelegram size={30} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default PageFooter;
