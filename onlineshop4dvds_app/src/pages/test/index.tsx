import React from "react";

export default function Test() {
    return (
        <div className="flex items-center justify-center">
  <div
    className="flex h-screen w-screen items-center justify-start overflow-hidden rounded-small bg-content1 p-2 sm:p-4 lg:p-8"
    style={{
      backgroundImage:
        'url("https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/black-background-texture-2.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }}
  >
    <div className="absolute right-10 top-10">
      <div className="flex items-center">
        <svg
          fill="none"
          height={40}
          viewBox="0 0 32 32"
          width={40}
          className="text-white"
        >
          <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
        <p className="font-medium text-white">ACME</p>
      </div>
    </div>
    <div className="absolute bottom-10 right-10 hidden md:block">
      <p className="max-w-xl text-right text-white/60">
        <span className="font-medium">“</span>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquet.
        <span className="font-medium">”</span>
      </p>
    </div>
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
      <p className="pb-2 text-xl font-medium">Log In</p>
      <form className="flex flex-col gap-3">
        <div
          className="group flex flex-col w-full"
          data-slot="base"
          data-filled="true"
          data-filled-within="true"
          data-has-elements="true"
          data-has-label="true"
          data-hover="true"
        >
          <div
            data-slot="input-wrapper"
            className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-foreground min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background !duration-150 transition-colors motion-reduce:transition-none h-14 py-2"
            style={{ cursor: "text" }}
            data-hover="true"
          >
            <label
              data-slot="label"
              className="absolute z-10 pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 cursor-text will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-default-600 group-data-[filled-within=true]:pointer-events-auto group-data-[filled-within=true]:scale-85 text-small group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))] pe-2 max-w-full text-ellipsis overflow-hidden"
              id="react-aria95615813-:r1:"
              htmlFor="react-aria95615813-:r0:"
            >
              Email Address
            </label>
            <div
              data-slot="inner-wrapper"
              className="inline-flex w-full items-center h-full box-border group-data-[has-label=true]:items-end"
            >
              <input
                data-slot="input"
                className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small"
                aria-label="Email Address"
                placeholder="Enter your email"
                id="react-aria95615813-:r0:"
                aria-labelledby="react-aria95615813-:r0: react-aria95615813-:r1:"
                type="email"
                defaultValue=""
                name="email"
              />
            </div>
          </div>
        </div>
        <div
          className="group flex flex-col w-full"
          data-slot="base"
          data-filled="true"
          data-filled-within="true"
          data-has-elements="true"
          data-has-label="true"
        >
          <div
            data-slot="input-wrapper"
            className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-foreground min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background !duration-150 transition-colors motion-reduce:transition-none h-14 py-2"
            style={{ cursor: "text" }}
          >
            <label
              data-slot="label"
              className="absolute z-10 pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 cursor-text will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-default-600 group-data-[filled-within=true]:pointer-events-auto group-data-[filled-within=true]:scale-85 text-small group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))] pe-2 max-w-full text-ellipsis overflow-hidden"
              id="react-aria95615813-:r6:"
              htmlFor="react-aria95615813-:r5:"
            >
              Password
            </label>
            <div
              data-slot="inner-wrapper"
              className="inline-flex w-full items-center h-full box-border group-data-[has-label=true]:items-end"
            >
              <input
                data-slot="input"
                data-has-end-content="true"
                className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small"
                aria-label="Password"
                placeholder="Enter your password"
                id="react-aria95615813-:r5:"
                aria-labelledby="react-aria95615813-:r5: react-aria95615813-:r6:"
                type="password"
                defaultValue=""
                name="password"
              />
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="pointer-events-none text-2xl text-default-400 iconify iconify--solar"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20c4.182 0 7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4C7.818 4 4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-1 py-2">
          <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
            <div
              style={{
                border: 0,
                clip: "rect(0px, 0px, 0px, 0px)",
                clipPath: "inset(50%)",
                height: 1,
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: 1,
                whiteSpace: "nowrap"
              }}
            >
              <input
                aria-label="Remember me"
                aria-labelledby=":ra:"
                type="checkbox"
                defaultValue=""
                name="remember"
              />
            </div>
            <span
              aria-hidden="true"
              className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border before:border-default after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-data-[hover=true]:before:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background after:bg-primary after:text-primary-foreground text-primary-foreground w-4 h-4 mr-2 rounded-[calc(theme(borderRadius.medium)*0.5)] before:rounded-[calc(theme(borderRadius.medium)*0.5)] after:rounded-[calc(theme(borderRadius.medium)*0.5)] before:transition-colors group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200 motion-reduce:transition-none"
            >
              <svg
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 17 18"
                className="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-3 h-2 transition-opacity motion-reduce:transition-none"
              >
                <polyline
                  fill="none"
                  points="1 9 7 14 15 4"
                  stroke="currentColor"
                  strokeDasharray={22}
                  strokeDashoffset={66}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </span>
            <span
              id=":ra:"
              className="relative text-foreground select-none text-small transition-colors-opacity before:transition-width motion-reduce:transition-none"
            >
              Remember me
            </span>
          </label>
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500"
            tabIndex={0}
            role="link"
            href="#"
          >
            Forgot password?
          </a>
        </div>
        <button
          className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover"
          type="submit"
        >
          Log In
        </button>
      </form>
      <div className="flex items-center gap-4 py-2">
        <hr
          className="bg-divider border-none w-full h-divider flex-1"
          role="separator"
        />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <hr
          className="bg-divider border-none w-full h-divider flex-1"
          role="separator"
        />
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default text-foreground data-[hover=true]:opacity-hover"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            focusable="false"
            tabIndex={-1}
            className="iconify iconify--flat-color-icons"
            width={24}
            height={24}
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
            />
            <path
              fill="#FF3D00"
              d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
            />
          </svg>
          Continue with Google
        </button>
        <button
          className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-default text-foreground data-[hover=true]:opacity-hover"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="text-default-500 iconify iconify--fe"
            focusable="false"
            tabIndex={-1}
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10"
            />
          </svg>
          Continue with Github
        </button>
      </div>
      <p className="text-center text-small">
        Need to create an account?&nbsp;
        <a
          className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
          tabIndex={0}
          role="link"
          href="#"
        >
          Sign Up
        </a>
      </p>
    </div>
  </div>
</div>
    );
}