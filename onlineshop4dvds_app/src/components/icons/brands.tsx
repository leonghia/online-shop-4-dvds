import { cn } from "@nextui-org/react";

const defaultClassName = "w-5 h-5";

export function Google({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" className={cn(className || defaultClassName)}>
            <title>Google Logo</title>
            <clipPath id="g">
                <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
            </clipPath>
            <g className="colors" clipPath="url(#g)">
                <path fill="#FBBC05" d="M0 37V11l17 13z" />
                <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
            </g>
        </svg>
    );
}

export function Acme({ width, height, className }: { width: number, height: number, className?: string }) {
    return (
        <svg fill="none" height={height} viewBox="0 0 32 32" width={width} className={cn(className)}>
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
}

export function Facebook({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 40 40" className={cn(className || defaultClassName)}>
            <linearGradient id="a" x1="-277.375" x2="-277.375" y1="406.6018" y2="407.5726" gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0062e0" />
                <stop offset="1" stopColor="#19afff" />
            </linearGradient>
            <path fill="url(#a)" d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z" />
            <path fill="#fff" d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z" />
        </svg>
    );
}

export function Imdb({ className }: { className?: string }) {
    return (
        <svg version="1.1" viewBox="0 0 256 128" xmlns="http://www.w3.org/2000/svg" className={cn(className || "h-5")}><rect width="100%" height="100%" rx="16" fill="#f5c518" /><g transform="matrix(4,0,0,4,32,28)"><polygon points="0 18 5 18 5 0 0 0" /><path d="M 15.672518,0 14.553483,8.4084693 13.858201,3.8350243 C 13.65661,2.3700926 13.463247,1.0917512 13.278113,0 H 7 v 18 h 4.241635 L 11.258091,6.1138068 13.043609,18 h 3.019748 L 17.758365,5.8517865 17.770708,18 H 22 V 0 Z" /><path d="m24 18v-18h7.804559c1.764793 0 3.195441 1.4199441 3.195441 3.1766042v11.6467918c0 1.75439-1.428338 3.176604-3.195441 3.176604zm5.832248-14.7604764c-0.198326-0.1071901-0.577732-0.1588002-1.129596-0.1588002v11.8107626c0.728633 0 1.177022-0.13101 1.345167-0.40494 0.168146-0.26996 0.254375-1.000441 0.254375-2.199382v-6.9792681c0-0.8138509-0.03018-1.3339215-0.08623-1.5641817-0.05605-0.2302603-0.18108-0.3970005-0.383717-0.5041906z" /><path d="m44.429908 4.5068582h0.31961c1.795192 0 3.250482 1.4058177 3.250482 3.1380094v7.2171234c0 1.733074-1.454818 3.138009-3.250482 3.138009h-0.31961c-1.098446 0-2.069633-0.526338-2.658038-1.331726l-0.287974 1.100504h-4.483896v-17.768778h4.784326v5.7805356c0.618172-0.7703782 1.570825-1.2736774 2.645582-1.2736774zm-1.02434 8.7773578v-4.2651379c0-0.7047386-0.04524-1.1672234-0.139493-1.3801133-0.09425-0.2128898-0.470487-0.3495732-0.734393-0.3495732s-0.670889 0.1110822-0.75006 0.2982784v7.219809c0.09048 0.205549 0.478614 0.319927 0.75006 0.319927s0.666531-0.110708 0.749473-0.319927c0.08294-0.20922 0.124413-0.719421 0.124413-1.523263z" /></g></svg>
    );
}

export function MoMo({ className }: { className?: string }) {
    return (
        <svg className={cn(className || "h-5")} viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>momo_icon_square_pinkbg</title>
            <g id="5.-Kiểm-tra-giao-dịch" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="momo_icon_square_pinkbg">
                    <path d="M55.9459459,0 L4.05405405,0 C2.56756757,0 1.21621622,0 0,0 L0,55.9459459 C0,57.4324324 0,58.7837838 0,60 L60,60 C60,58.7837838 60,57.4324324 60,55.9459459 L60,0 C58.7837838,0 57.4324324,0 55.9459459,0 Z" id="Path"></path>
                    <g id="Group" transform="translate(4.000000, 5.500000)" fill="#A50064" fillRule="nonzero">
                        <path d="M40.9111892,22.0954907 C47.0426493,22.0954907 52,17.1564987 52,11.0477454 C52,4.93899204 47.0426493,0 40.9111892,0 C34.7797291,0 29.8223783,4.93899204 29.8223783,11.0477454 C29.8223783,17.1564987 34.7797291,22.0954907 40.9111892,22.0954907 Z M40.9111892,6.34270557 C43.5203211,6.34270557 45.633718,8.44827586 45.633718,11.0477454 C45.633718,13.6472149 43.5203211,15.7527851 40.9111892,15.7527851 C38.3020572,15.7527851 36.1886603,13.6472149 36.1886603,11.0477454 C36.1886603,8.44827586 38.3020572,6.34270557 40.9111892,6.34270557 Z" id="Shape"></path>
                        <path d="M40.9111892,26.8785146 C34.7797291,26.8785146 29.8223783,31.8175066 29.8223783,37.9262599 C29.8223783,44.0350133 34.7797291,48.9740053 40.9111892,48.9740053 C47.0426493,48.9740053 52,44.0350133 52,37.9262599 C52,31.8175066 47.0426493,26.8785146 40.9111892,26.8785146 Z M40.9111892,42.6312997 C38.3020572,42.6312997 36.1886603,40.5257294 36.1886603,37.9262599 C36.1886603,35.3267905 38.3020572,33.2212202 40.9111892,33.2212202 C43.5203211,33.2212202 45.633718,35.3267905 45.633718,37.9262599 C45.633718,40.5257294 43.5203211,42.6312997 40.9111892,42.6312997 Z" id="Shape"></path>
                        <path d="M18.3161064,26.8785146 C16.4375314,26.8785146 14.7155043,27.5023873 13.3326643,28.5421751 C11.9498244,27.5023873 10.201706,26.8785146 8.34922228,26.8785146 C3.75715003,26.8785146 0.0260913196,30.595756 0.0260913196,35.1708223 L0.0260913196,49 L6.39237331,49 L6.39237331,35.0928382 C6.39237331,34.0530504 7.22729553,33.2212202 8.27094832,33.2212202 C9.3146011,33.2212202 10.1495233,34.0530504 10.1495233,35.0928382 L10.1495233,48.9740053 L16.5158053,48.9740053 L16.5158053,35.0928382 C16.5158053,34.0530504 17.3507275,33.2212202 18.3943803,33.2212202 C19.4380331,33.2212202 20.2729553,34.0530504 20.2729553,35.0928382 L20.2729553,48.9740053 L26.613146,48.9740053 L26.613146,35.1448276 C26.613146,30.595756 22.9081786,26.8785146 18.3161064,26.8785146 Z" id="Path"></path>
                        <path d="M18.3161064,0 C16.4375314,0 14.7155043,0.623872679 13.3326643,1.66366048 C11.9498244,0.623872679 10.201706,0 8.34922228,0 C3.73105871,0 0,3.71724138 0,8.29230769 L0,22.0954907 L6.36628199,22.0954907 L6.36628199,8.21432361 C6.36628199,7.17453581 7.20120421,6.34270557 8.244857,6.34270557 C9.28850978,6.34270557 10.123432,7.17453581 10.123432,8.21432361 L10.123432,22.0954907 L16.489714,22.0954907 L16.489714,8.21432361 C16.489714,7.17453581 17.3246362,6.34270557 18.368289,6.34270557 C19.4119418,6.34270557 20.246864,7.17453581 20.246864,8.21432361 L20.246864,22.0954907 L26.613146,22.0954907 L26.613146,8.29230769 C26.613146,3.71724138 22.9081786,0 18.3161064,0 Z" id="Path"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export function Stripe(props: {className: string}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 468 222.5"
            xmlSpace="preserve"
            {...props}
        >
            <path
                d="M414 113.4c0-25.6-12.4-45.8-36.1-45.8-23.8 0-38.2 20.2-38.2 45.6 0 30.1 17 45.3 41.4 45.3 11.9 0 20.9-2.7 27.7-6.5v-20c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3.2-6.5.2-8.9zm-49.4-9.5c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16h-25.8zm-63.5-36.3c-9.8 0-16.1 4.6-19.6 7.8l-1.3-6.2h-22v116.6l25-5.3.1-28.3c3.6 2.6 8.9 6.3 17.7 6.3 17.9 0 34.2-14.4 34.2-46.1-.1-29-16.6-44.8-34.1-44.8zm-6 68.9c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4zm-71.3-74.8l25.1-5.4V36l-25.1 5.3zm0 7.6h25.1v87.5h-25.1zm-26.9 7.4l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7 15.9-6.3 19-5.2v-23c-3.2-1.2-14.9-3.4-20.8 7.4zm-50-29.1l-24.4 5.2-.1 80.1c0 14.8 11.1 25.7 25.9 25.7 8.2 0 14.2-1.5 17.5-3.3V135c-3.2 1.3-19 5.9-19-8.9V90.6h19V69.3h-19l.1-21.7zM79.3 94.7c0-3.9 3.2-5.4 8.5-5.4 7.6 0 17.2 2.3 24.8 6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6C67.5 67.6 54 78.2 54 95.9c0 27.6 38 23.2 38 35.1 0 4.6-4 6.1-9.6 6.1-8.3 0-18.9-3.4-27.3-8v23.8c9.3 4 18.7 5.7 27.3 5.7 20.8 0 35.1-10.3 35.1-28.2-.1-29.8-38.2-24.5-38.2-35.7z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#635bff"
            />
        </svg>
    );
}