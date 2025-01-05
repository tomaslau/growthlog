
import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export function CraftledLogo({ className, ...props }: LogoProps) {
  return (
    <svg width="90" height="21" viewBox="0 0 90 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path d="M7.24157 20.2561C5.82364 20.2561 4.57029 19.965 3.48153 19.3826C2.39276 18.8002 1.54031 17.9815 0.924187 16.9265C0.308062 15.8715 0 14.6351 0 13.2171C0 11.8076 0.308062 10.5838 0.924187 9.54571C1.54031 8.50758 2.39276 7.71 3.48153 7.15295C4.57029 6.58747 5.82364 6.30473 7.24157 6.30473C8.30502 6.30473 9.24609 6.46087 10.0648 6.77315C10.8835 7.08543 11.5713 7.50321 12.1284 8.0265C12.6939 8.54134 13.1243 9.11105 13.4197 9.73561C13.7151 10.3517 13.8628 10.9679 13.8628 11.584C13.8628 11.6009 13.8628 11.6177 13.8628 11.6346C13.8628 11.6515 13.8628 11.6684 13.8628 11.6853H10.5585C10.5585 11.6431 10.5543 11.5966 10.5459 11.546C10.5374 11.4954 10.529 11.4447 10.5205 11.3941C10.453 10.9636 10.28 10.5754 10.0015 10.2294C9.72295 9.87487 9.35159 9.59213 8.88739 9.38113C8.42318 9.17013 7.86192 9.06462 7.20359 9.06462C6.50307 9.06462 5.86162 9.22077 5.27926 9.53305C4.70533 9.83689 4.24535 10.2969 3.89931 10.913C3.56171 11.5291 3.3929 12.2972 3.3929 13.2171C3.3929 14.1287 3.56171 14.9051 3.89931 15.5466C4.23691 16.1796 4.69267 16.6649 5.2666 17.0025C5.84896 17.3317 6.49463 17.4962 7.20359 17.4962C7.95476 17.4962 8.56666 17.3823 9.03931 17.1544C9.52039 16.9181 9.88331 16.6058 10.1281 16.2176C10.3728 15.8209 10.5121 15.3905 10.5459 14.9262H13.8628C13.8628 15.5508 13.7193 16.1796 13.4324 16.8126C13.1454 17.4372 12.7234 18.0111 12.1663 18.5344C11.6093 19.0577 10.9172 19.4754 10.0901 19.7877C9.27141 20.1 8.3219 20.2561 7.24157 20.2561Z" fill="#7C828C"/>
      <path d="M14.8455 19.9776V6.53261H18.1751V11.0016L17.4029 10.5712C17.4873 9.98881 17.6434 9.44021 17.8713 8.92536C18.0992 8.40208 18.403 7.94632 18.7828 7.55807C19.1626 7.16139 19.6226 6.85333 20.1628 6.63389C20.7029 6.41445 21.3191 6.30473 22.0112 6.30473C22.5598 6.30473 22.9902 6.34693 23.3025 6.43133C23.6232 6.50729 23.8215 6.57059 23.8975 6.62123L23.2898 9.67231C23.2054 9.61323 23.0324 9.54149 22.7708 9.45709C22.5176 9.36425 22.1757 9.31783 21.7453 9.31783C21.0616 9.31783 20.4877 9.43599 20.0235 9.67231C19.5678 9.90019 19.2048 10.2125 18.9347 10.6092C18.6647 10.9974 18.4705 11.4278 18.3524 11.9005C18.2342 12.3647 18.1751 12.8289 18.1751 13.2931V19.9776H14.8455Z" fill="#7C828C"/>
      <path d="M28.5859 20.2561C27.5815 20.2561 26.6995 20.1 25.9399 19.7877C25.1803 19.467 24.5853 19.007 24.1549 18.4078C23.7244 17.8085 23.5092 17.0869 23.5092 16.2429C23.5092 15.3229 23.7582 14.5675 24.2561 13.9767C24.7625 13.3775 25.442 12.9175 26.2944 12.5968C27.1469 12.2676 28.0921 12.0566 29.1303 11.9638C30.6664 11.8119 31.7383 11.6684 32.3459 11.5333C32.9621 11.3899 33.2701 11.162 33.2701 10.8497C33.2701 10.8413 33.2701 10.837 33.2701 10.837C33.2701 10.8286 33.2701 10.8244 33.2701 10.8244C33.2701 10.2336 33.0043 9.77781 32.4725 9.45709C31.9408 9.13637 31.1897 8.976 30.219 8.976C29.1978 8.976 28.4129 9.15747 27.8643 9.52039C27.3241 9.87487 27.054 10.4404 27.054 11.2168H23.7624C23.7624 10.1618 24.0409 9.27141 24.598 8.54556C25.1634 7.81128 25.9357 7.25423 26.9148 6.87443C27.8938 6.49463 29.0037 6.30473 30.2444 6.30473C31.4007 6.30473 32.4599 6.47775 33.4221 6.82379C34.3842 7.16983 35.1565 7.69312 35.7388 8.39364C36.3212 9.09417 36.6124 9.96771 36.6124 11.0143C36.6124 11.1915 36.6124 11.3688 36.6124 11.546C36.6124 11.7232 36.6124 11.9005 36.6124 12.0777V17.1418C36.6124 17.4625 36.6208 17.779 36.6377 18.0913C36.663 18.3951 36.7094 18.6694 36.777 18.9142C36.8614 19.1843 36.9627 19.4121 37.0808 19.5978C37.199 19.7835 37.2918 19.9101 37.3593 19.9776H34.0677C34.0086 19.9185 33.9242 19.8046 33.8145 19.6358C33.7132 19.4586 33.6204 19.256 33.536 19.0281C33.4516 18.7749 33.3883 18.5048 33.3461 18.2179C33.3039 17.9225 33.2828 17.5975 33.2828 17.243L33.9411 17.6988C33.6879 18.2137 33.2997 18.6652 32.7764 19.0534C32.2615 19.4332 31.6454 19.7286 30.928 19.9396C30.2106 20.1506 29.4299 20.2561 28.5859 20.2561ZM29.3961 17.6355C30.0882 17.6355 30.7297 17.5173 31.3205 17.281C31.9113 17.0447 32.3881 16.6818 32.7511 16.1923C33.114 15.6943 33.2954 15.0571 33.2954 14.2806V12.4829L34.1057 13.3944C33.5655 13.5969 32.9156 13.7657 32.156 13.9008C31.3964 14.0274 30.6284 14.1287 29.8519 14.2046C28.856 14.2975 28.1048 14.4705 27.5984 14.7237C27.1004 14.9769 26.8515 15.3905 26.8515 15.9644C26.8515 16.5214 27.0625 16.9392 27.4845 17.2177C27.9065 17.4962 28.5437 17.6355 29.3961 17.6355Z" fill="#7C828C"/>
      <path d="M39.5646 19.9776V9.19123H36.716V6.53261H39.5646V5.3299C39.5646 4.54497 39.6701 3.85711 39.8811 3.2663C40.0921 2.66706 40.379 2.16066 40.742 1.74709C41.1049 1.33353 41.5184 1.00015 41.9826 0.746946C42.4553 0.485304 42.9575 0.295402 43.4892 0.177241C44.0294 0.0590802 44.5653 0 45.097 0C45.6034 0 45.9875 0.0295401 46.2491 0.0886203C46.5192 0.1477 46.7006 0.198341 46.7935 0.240542V2.92448C46.6922 2.89072 46.515 2.85274 46.2618 2.81054C46.017 2.7599 45.7511 2.73458 45.4642 2.73458C44.9493 2.73458 44.5231 2.81054 44.1855 2.96246C43.8479 3.10594 43.5863 3.3085 43.4006 3.57015C43.2149 3.83179 43.0841 4.13563 43.0081 4.48167C42.9322 4.81927 42.8942 5.19064 42.8942 5.59576V6.53261H46.6162V9.19123H42.8942V19.9776H39.5646Z" fill="#7C828C"/>
      <path d="M53.1922 20.2308C52.7111 20.2308 52.2216 20.1844 51.7236 20.0916C51.2256 19.9987 50.7699 19.8257 50.3563 19.5725C49.9427 19.3193 49.6094 18.9479 49.3562 18.4584C49.103 17.9689 48.9764 17.3232 48.9764 16.5214C48.9764 16.3357 48.9764 16.1501 48.9764 15.9644C48.9764 15.7703 48.9764 15.5719 48.9764 15.3694V9.19123H45.7987V6.53261H47.09C47.5289 6.53261 47.8749 6.51573 48.1281 6.48197C48.3813 6.43977 48.567 6.34693 48.6852 6.20344C48.8033 6.05996 48.8793 5.8363 48.9131 5.53246C48.9553 5.22018 48.9764 4.78973 48.9764 4.24113V2.10158H52.3186V6.53261H56.3192V9.19123H52.3186V14.5844C52.3186 14.7448 52.3186 14.9051 52.3186 15.0655C52.3186 15.2174 52.3186 15.3651 52.3186 15.5086C52.3186 16.1332 52.3946 16.6354 52.5465 17.0152C52.6984 17.395 53.0571 17.5849 53.6226 17.5849C53.8927 17.5849 54.1459 17.5595 54.3822 17.5089C54.627 17.4583 54.8084 17.4076 54.9266 17.357V19.965C54.7662 20.024 54.5341 20.0831 54.2303 20.1422C53.9265 20.2013 53.5804 20.2308 53.1922 20.2308Z" fill="#7C828C"/>
      <path d="M60.5299 0.189901V19.9776H57.2509V0.189901H60.5299Z" fill="#7C828C"/>
      <path d="M63.4033 14.3312V11.9638H72.8098L72.43 12.5968C72.43 12.5462 72.43 12.4913 72.43 12.4322C72.43 12.3647 72.43 12.3098 72.43 12.2676C72.43 11.6853 72.2991 11.1409 72.0375 10.6345C71.7759 10.1196 71.3792 9.70607 70.8475 9.39379C70.3157 9.07307 69.6405 8.9127 68.8218 8.9127C68.0116 8.9127 67.3068 9.08573 66.7076 9.43177C66.1168 9.76937 65.6568 10.2589 65.3277 10.9003C65.0069 11.5418 64.8466 12.3098 64.8466 13.2045C64.8466 14.1244 65.0027 14.9178 65.315 15.5846C65.6273 16.2429 66.083 16.7493 66.6823 17.1038C67.29 17.4498 68.0285 17.6228 68.8978 17.6228C69.4886 17.6228 69.9992 17.568 70.4297 17.4583C70.8601 17.3485 71.2104 17.2008 71.4805 17.0152C71.759 16.821 71.9658 16.6143 72.1008 16.3948C72.2443 16.1754 72.3287 15.9559 72.354 15.7365H75.671C75.6203 16.302 75.4304 16.8548 75.1012 17.395C74.7805 17.9267 74.329 18.412 73.7466 18.8509C73.1643 19.2813 72.4553 19.6274 71.6197 19.889C70.7926 20.1422 69.8473 20.2688 68.7839 20.2688C67.3406 20.2688 66.0788 19.9734 64.9985 19.3826C63.9182 18.7918 63.0742 17.9689 62.4665 16.9139C61.8672 15.8589 61.5676 14.6519 61.5676 13.2931C61.5676 11.9005 61.8714 10.6809 62.4791 9.63433C63.0953 8.58776 63.9477 7.7733 65.0365 7.19093C66.1252 6.60013 67.3744 6.30473 68.7839 6.30473C70.2355 6.30473 71.4889 6.60013 72.5439 7.19093C73.6074 7.78174 74.426 8.60464 75 9.65965C75.5739 10.7062 75.8608 11.9258 75.8608 13.3184C75.8608 13.4957 75.8566 13.6856 75.8482 13.8881C75.8398 14.0907 75.8271 14.2384 75.8102 14.3312H63.4033Z" fill="#7C828C"/>
      <path d="M82.4166 20.2561C81.311 20.2561 80.2855 19.9903 79.3402 19.4586C78.4034 18.9184 77.6522 18.125 77.0867 17.0785C76.5212 16.0319 76.2385 14.7448 76.2385 13.2171C76.2385 11.7317 76.5254 10.4741 77.0994 9.44443C77.6817 8.41474 78.4413 7.63404 79.3782 7.10231C80.3235 6.57059 81.3363 6.30473 82.4166 6.30473C83.4716 6.30473 84.4464 6.56637 85.3411 7.08965C86.2357 7.6045 86.9531 8.3219 87.4933 9.24187C88.0335 10.1618 88.3035 11.2168 88.3035 12.4069C88.3035 12.4406 88.3035 12.4744 88.3035 12.5082C88.3035 12.5419 88.3035 12.5757 88.3035 12.6095L86.6577 12.6474C86.6577 12.6221 86.6577 12.5968 86.6577 12.5715C86.6577 12.5377 86.6577 12.5082 86.6577 12.4829C86.6577 11.8161 86.4889 11.2337 86.1513 10.7358C85.8222 10.2378 85.3917 9.84955 84.86 9.57103C84.3367 9.28407 83.7797 9.14058 83.1889 9.14058C82.2183 9.14058 81.3911 9.46975 80.7075 10.1281C80.0238 10.778 79.682 11.8076 79.682 13.2171C79.682 14.6182 80.0238 15.6521 80.7075 16.3189C81.3911 16.9856 82.2183 17.319 83.1889 17.319C83.805 17.319 84.3747 17.1713 84.898 16.8759C85.4213 16.5805 85.8433 16.1754 86.164 15.6605C86.4932 15.1372 86.6577 14.538 86.6577 13.8628L88.3035 13.9388C88.3035 15.1204 88.0377 16.1923 87.506 17.1544C86.9827 18.1082 86.2779 18.8635 85.3917 19.4206C84.5055 19.9776 83.5138 20.2561 82.4166 20.2561ZM86.6577 19.9776V0.189901H90V19.9776H86.6577Z" fill="#7C828C"/>
    </svg>
  );
}

export function BestWritingLogo({ className, ...props }: LogoProps) {
  return (
    <svg width="162" height="29" viewBox="0 0 162 29" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.4752 24.7813V29C25.428 27.0597 29.7298 21.4652 29.73 14.865C29.7298 6.65532 23.0746 0 14.865 0C6.65542 0 0 6.65532 0 14.865C0 21.4563 4.29053 27.0447 10.2306 28.9921V24.7813C10.2306 23.9727 10.8862 23.3174 11.6949 23.3174H11.825C11.5422 22.6222 10.3006 19.736 8.05036 16.7785C11.0765 12.2026 12.6509 8.65977 13.3929 3.39508H14.1026V15.2613C13.5519 15.5403 13.1736 16.1103 13.1736 16.7696C13.1734 17.7037 13.9309 18.461 14.865 18.461C15.7991 18.461 16.5566 17.7037 16.5563 16.7696C16.5566 16.1103 16.1781 15.5403 15.6274 15.2613V3.39508H16.337C17.0791 8.65977 18.6535 12.2024 21.6797 16.7786C19.4294 19.736 18.1876 22.6222 17.9047 23.3174H18.0113C18.8199 23.3174 19.4752 23.9727 19.4752 24.7813Z" fill="currentColor"/>
    </svg>
  );
}
