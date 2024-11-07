import React from 'react';

const Clients = () => {
  return (
    <div className="p-8">
        <div className=''>
        <h2 className="text-center text-2xl font-semibold mb-6">What Our Clients Say</h2>
        </div>
        <div className="flex p-0">
      <div className="max-w-xs mx-auto p-4 text-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/7568/f57e/55f073573d2a9d9b064bddff59e86545?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pSG~VO4jmLVP8O78Yvs8EQfEZv-aZrbcdaDhD2p7jtoYl~CXWiir6hUxro0qpN2fCmP9XyA~U-JHF0a9kFh3sbf9e5Erh2Ckexkvr2LqEqD8VW1NJSt70QgYWH3kfcgOl6G32IFVnigzyYW8uluUA24~D-dUJkRRQgoMrJwDXu~pIK4gEQSAi~otOSwuxnH2EC8pgI6NeBSgZjqpp0G2GyiAZf7hop8Pi8Mxdw8uHomxIx2dRm-B~deDmP7W7DWZ4cRxtYALdKiHMkmBo0-mK3sov6~EpTGEy7jACgJtCGUPIjtwEsvQgwNGnofBiU-EUihmbWzSoYeDtqgy0GsXyA__"
          alt="Client testimonial"
          className="w-20  flex justify-center"
        />
        <div className="flex justify-center mt-4 space-x-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500"
            >
              <g clipPath="url(#clip0_1_114)">
                <path
                  d="M17.421 27.5505C16.8527 27.2158 16.1473 27.2158 15.579 27.5505L8.72646 31.5837C7.38202 32.3751 5.73143 31.2146 6.02104 29.6817L7.603 21.3086C7.71612 20.7099 7.52142 20.0943 7.08455 19.6696L1.05219 13.8042C-0.0398643 12.7424 0.58189 10.8889 2.09335 10.7004L10.0889 9.70325C10.7238 9.62408 11.2701 9.21671 11.5271 8.63087L14.8371 1.08611C15.4726 -0.362359 17.5274 -0.362361 18.1629 1.0861L21.4729 8.63086C21.7299 9.21671 22.2762 9.62408 22.911 9.70325L30.9066 10.7004C32.4181 10.8889 33.0399 12.7424 31.9478 13.8042L25.9154 19.6696C25.4785 20.0943 25.2839 20.7099 25.397 21.3086L26.979 29.6817C27.2686 31.2146 25.618 32.3751 24.2736 31.5837L17.421 27.5505Z"
                  fill="#FB923C"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_114">
                  <rect x="0.5" width="32" height="32" rx="1.6" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
        <p className="mt-4 text-gray-600">I cannot recommend this company enough! Their professionalism and attention to detail transformed our project, exceeding all expectations. The team was always available and eager to help.</p>
      </div>

      <div className="max-w-xs mx-auto p-4 text-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/7568/f57e/55f073573d2a9d9b064bddff59e86545?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pSG~VO4jmLVP8O78Yvs8EQfEZv-aZrbcdaDhD2p7jtoYl~CXWiir6hUxro0qpN2fCmP9XyA~U-JHF0a9kFh3sbf9e5Erh2Ckexkvr2LqEqD8VW1NJSt70QgYWH3kfcgOl6G32IFVnigzyYW8uluUA24~D-dUJkRRQgoMrJwDXu~pIK4gEQSAi~otOSwuxnH2EC8pgI6NeBSgZjqpp0G2GyiAZf7hop8Pi8Mxdw8uHomxIx2dRm-B~deDmP7W7DWZ4cRxtYALdKiHMkmBo0-mK3sov6~EpTGEy7jACgJtCGUPIjtwEsvQgwNGnofBiU-EUihmbWzSoYeDtqgy0GsXyA__"
          alt="Client testimonial"
          className="w-20  flex justify-center"
        />
        <div className="flex justify-center mt-4 space-x-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500"
            >
              <g clipPath="url(#clip0_1_114)">
                <path
                  d="M17.421 27.5505C16.8527 27.2158 16.1473 27.2158 15.579 27.5505L8.72646 31.5837C7.38202 32.3751 5.73143 31.2146 6.02104 29.6817L7.603 21.3086C7.71612 20.7099 7.52142 20.0943 7.08455 19.6696L1.05219 13.8042C-0.0398643 12.7424 0.58189 10.8889 2.09335 10.7004L10.0889 9.70325C10.7238 9.62408 11.2701 9.21671 11.5271 8.63087L14.8371 1.08611C15.4726 -0.362359 17.5274 -0.362361 18.1629 1.0861L21.4729 8.63086C21.7299 9.21671 22.2762 9.62408 22.911 9.70325L30.9066 10.7004C32.4181 10.8889 33.0399 12.7424 31.9478 13.8042L25.9154 19.6696C25.4785 20.0943 25.2839 20.7099 25.397 21.3086L26.979 29.6817C27.2686 31.2146 25.618 32.3751 24.2736 31.5837L17.421 27.5505Z"
                  fill="#FB923C"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_114">
                  <rect x="0.5" width="32" height="32" rx="1.6" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
        <p className="mt-4 text-gray-600">I cannot recommend this company enough! Their professionalism and attention to detail transformed our project, exceeding all expectations. The team was always available and eager to help.</p>
      </div>

      <div className="max-w-xs mx-auto p-4 text-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/7568/f57e/55f073573d2a9d9b064bddff59e86545?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pSG~VO4jmLVP8O78Yvs8EQfEZv-aZrbcdaDhD2p7jtoYl~CXWiir6hUxro0qpN2fCmP9XyA~U-JHF0a9kFh3sbf9e5Erh2Ckexkvr2LqEqD8VW1NJSt70QgYWH3kfcgOl6G32IFVnigzyYW8uluUA24~D-dUJkRRQgoMrJwDXu~pIK4gEQSAi~otOSwuxnH2EC8pgI6NeBSgZjqpp0G2GyiAZf7hop8Pi8Mxdw8uHomxIx2dRm-B~deDmP7W7DWZ4cRxtYALdKiHMkmBo0-mK3sov6~EpTGEy7jACgJtCGUPIjtwEsvQgwNGnofBiU-EUihmbWzSoYeDtqgy0GsXyA__"
          alt="Client testimonial"
          className="w-20  flex justify-center"
        />
        <div className="flex justify-center mt-4 space-x-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500"
            >
              <g clipPath="url(#clip0_1_114)">
                <path
                  d="M17.421 27.5505C16.8527 27.2158 16.1473 27.2158 15.579 27.5505L8.72646 31.5837C7.38202 32.3751 5.73143 31.2146 6.02104 29.6817L7.603 21.3086C7.71612 20.7099 7.52142 20.0943 7.08455 19.6696L1.05219 13.8042C-0.0398643 12.7424 0.58189 10.8889 2.09335 10.7004L10.0889 9.70325C10.7238 9.62408 11.2701 9.21671 11.5271 8.63087L14.8371 1.08611C15.4726 -0.362359 17.5274 -0.362361 18.1629 1.0861L21.4729 8.63086C21.7299 9.21671 22.2762 9.62408 22.911 9.70325L30.9066 10.7004C32.4181 10.8889 33.0399 12.7424 31.9478 13.8042L25.9154 19.6696C25.4785 20.0943 25.2839 20.7099 25.397 21.3086L26.979 29.6817C27.2686 31.2146 25.618 32.3751 24.2736 31.5837L17.421 27.5505Z"
                  fill="#FB923C"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_114">
                  <rect x="0.5" width="32" height="32" rx="1.6" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ))}
        </div>
        <p className="mt-4 text-gray-600">I cannot recommend this company enough! Their professionalism and attention to detail transformed our project, exceeding all expectations. The team was always available and eager to help.</p>
      </div>
      </div>
    </div>
  );
};

export default Clients;
