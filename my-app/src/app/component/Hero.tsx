import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://m.media-amazon.com/images/I/619m04tzCIL._AC_UL320_.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Sea detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Sport Sun Glasses
            </h1>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur doloribus autem fugit maiores maxime consectetur aliquam ab dolorum nesciunt.
               Libero optio quas eveniet explicabo illum saepe placeat maxime laborum.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={"blog"} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://m.media-amazon.com/images/I/61KQXq71FJL._AC_UL320_.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Sea detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Kaliyadi Polarized
            </h1>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum neque blanditiis,
               tenetur incidunt quae corporis? Maxime iste, minima numquam necessitatibus quae quisquam sint ipsum obcaecati expedita atque excepturi in.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={""} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="https://m.media-amazon.com/images/I/61MuX5kBftL._AC_UL320_.jpg"
            src="https://m.media-amazon.com/images/I/61A3+EkWTAL._AC_UL320_.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Sea detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Multi Color Glasses
            </h1>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit doloremque incidunt necessitatibus voluptas cumque magnam atque eligendi excepturi,
               minima vitae ad aliquam at odit asperiores nemo reprehenderit! Sapiente, soluta.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={""} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* second section */}





<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFhYVFxcVGBcXFhcVFRUXFhUXFhgaHSggGBolHRUVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0eICUtLS0tKy0tLS0tLSstLS0tMC0tLS0tLSstLSstLS0tLS0tLS0tLS0tKy0tLS0tLSstLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABGEAACAQIDBAcDCAgFAwUAAAABAgMAEQQSIQUxQVEGE2FxgZGhIjKxFDNCYnKSwfAHFSNSgqLR4VNzstLxQ2PCFkSDk6P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALBEAAgICAQQBAwIHAQAAAAAAAAECEQMSIRMxQVEEImHwBYEjQnGRobHRFP/aAAwDAQACEQMRAD8ACQfpHj0zQuOdip8r2oxL0igxER6iYCW3sqzNGb9ouL1y84X6wv2ireyCscmZ0Vhyvp5WPwq3GJkpS8nTNjbKxLKGbEuG4qVjdOH1Q3rWlwWDkGjurjsQqfVzXMJekYuMvWIBxViB53FUsX0zxgNocUwXtCMfNlJrN42+xp1Eu52ZsGKhfZ9cjwP6RNoxm7Oso/ddE+KBSK0OF/S0LftsKQf+2+/wYC3mah45opZYM13yFs3Z3CpG2cKzmyf0mYWR8siPDfczWZf4iNR5WrTxdIsGwJXEwEDfaRNPWoakvBacX2KT4EcqrSbPHKr46X7Otc4mLz18t9F8GMPOgeJldTuZCCPSls13HSZkn2cKjOzxWxfZC9tU5sGisFLAE7gSLnuFNZBaGXOz6jOz+ytU+AtVaTCVW4tTNtgKifAVozhuyvPkVPcWpl2wJ5VGcJ2VrDgaYdn9lPqBqZU4Xsppw3ZWq/Vx5Uhs7so6gtTJNBUZw9bNdnDiteSbKXlR1EPQxnyavDheytgNkDlXrbHFPqIWjMcMP2U4Q1rDsteVNGxxT6iDRmVMVedXWln2OOFQfqqjZC1Zn2hqMwVoX2faqz4Xsp7CoCmCmNDRd8P2VC0FOwoEtHUZSicmHqA4c07EUDHTDFV5oqYUp2IoMlMyVeMVN6mnYqBYK7iLGlLcd3PnUog51Lh4b8PSosqipEwJ93xH4148XGw8Rein6u42t2inNs5+CE9tqWyDUHJGhG5fgPQinjBoQRlYdqm48jc1a+S5Dci1+wDzFOKWFwM32b6eVGz8D1XkFybOU+6T4r/SoG2Y3AA9xt8aNGQ8B3g6GponvqQPX8mjdoXTizNSbOkGhU+V/hUmz8ZiMM+eGR424lTa/wBoHRu41q2woZdQD42tTP1byO7gRc+dPq33F0q7MWF/SbtFBZjHJ2tGAfNCB6VDg+kMr4lMTiHvlO7Wyg78qinTbO0vkQnhwPpas6M3W5WFiTuI/rSSi+yoG5R7uzryfpGwB0Mjjt6uS3oKKYLpNgpiFjnjZjuUnKT3BgK5EdiKRqpB8/hao/8A03qLNoe21vNbetR08fsvfIvB3T5ODwpHDCuFybPxEZsksg5e0Rp/C1/SnYTbO0MP7k0gHJjmXyk08qXSvsx9Wu6O5iCveo7K5TgP0nYtCOuiSReJClG8CDl9K2mA/SBgZVuHZWtqrI1x4gZT51nLHJFxyRZohHXpj7KHbO23BiDeNxysSAfKreKmKKzi7BRey61FFWUNsbYjw4BZHbn1a5io5kDW1XIJlkUMuqnUaEehrknSHpBLPJmACHVRlPtWvzBHZQbD4/FQkMk0gI1ylmt4qTqK2WK0ZvLTO8ZRTWUVgOj3T9y6RYiIe1YB0NrE8wxt610XqSRcCocXHuWpX2KMiCoGjPCiJwh5Go3wh7aABrIajK0QfDmoWiNMRV6sVG0IqywNMy0xNlb5IDUUmzlogBSIp2w4AkmzBUB2fR5lphip2xUAGwI5VXkwArQTYc8qpSxEcKtMloEfIhS+SCr5TsrzJTsVAWTo5ire1hJG7UBa33Caq/JmT3o5k55gy/6lrpE+OEYBZlXd9MD41ei2k+UZcx7mH4Gp2Ko5erodxa+6xIsO+x1qdpN2U3PNb/8Alajm1xiWmZjHKV4AqXW3dlt6VRnxZW2aGMDjeLJ55bEVG/2NNPuQpKx94s2nGxp6lQRdU8UUH0AvWv2bsnBSxxuUAYqL5ZZN/GwZjao9t7Bw8UZkUy6cAyn4r+NVZFc0ZXEwwONUXXkxQjus1NGy4bCwbsu+b4i/rUwlhO6SXuaNT69Z+FTwwxuQolAJIHtxkak2Gqk2qdkVqyk2zQSD1mXgQUv5EMD6VYXZ4A0cHts1/QfE0bk6J4ke6Y2PY5F/MCqj9H8Uts0Rv9VlYeeaqomwccC/JWHYygg/xGoZdnuDd4yV4HQm/Za/xopHBMLjq200Nhe3flqUFxvW3aysuviaVDsCpAd/VP8Adb+mtQYuHMBYZbc7itTA3Gw9f6GmSytbKAw13hju7hupUOzPySEAAqGFtNa8WCMkHKVbmCfXn41ro5CeN7DT3T8acQv7i37FX8KmmUY/E7PDDdqOOXXzoTj9jkqcgsw9fGuj9Sh0yDxDX/lNQNs+HcQR25jf+a5oTkhNJnMNl4FjmWUFLcWH463q6JOrPVpM6kjXIxA8bWvW5/VUTbmNu5TfyIrMbT6DyGQvFOlidzh1PddQ1aKVvnghxpccgDHbIlFtL93G9eNslyFA97lcaVq32DiAtgUJtp7Qtfxsaz+G2Zi45bvBJqd4Usv3luPOmpticUghh+j0yqDIGyaWuhK+DDQeNdR2FCyRD9qzg2te1l7BYVzhsUYbsTkbsJUk8tLEVZ2X0jnnVl65xbkynTvYE38RWcnsikqZ1MudKXW8xWF2Jj54XLNIZ78JGYZbfZLAeVHo+liahoHB/eQq6jxJU+lZ0vBfIczrSKKd1qGL0gw5y3lVP8wFB5tYetXUZWF1YMDxUgj0o1CwNtLHmInPg5io+nDklH3QwceVZybp3glNis6nk0YB8i1bidsu8nd31j550kkIksV1tfXj3XFawVmcmUG6eYPgJvuL/uqNunOG/dm+4v8AurL9IcIqu1o2Vb6FXb8Sbd1qz0+GTg7D7S3/AJhr/LW6xoyeRnRW6c4blL91f91WMF0wwjn3yh+uLeouK5ednSWuLMOYNv8AVY1XkRl95WHeCPjT6aJ6jO6w4pXF0IYcwQfhXrEVwzD4x0N0dlPNSR8KPYDpvio9CwkHKQAnzGtS8XopZV5OoOoqIoOVZfZ/6QYW0mhZO1DmHkbGjadKcARfrgO8MD8KnVorZPyBotvScQh71Uf6QKlTaqnfBAe3Ib/6qv4boUx3lu8RsR53/CpcT0Xgi9/EBTyIYN90KTWjUSbZDBtSP/BA+xI6fAUQg2pHw69O6Zm/1ihb4LDqLrMz/ZX/AHlakjw8X+JKDwBiU37iJKh6FLYNfrCJhZmkb/Miw7+osar4rB4aQWLxr/8AA34MRVOHD/WPLWMj4E1K8FtWZQOZEn4Cp+n2VbIB0ZiJuuJS/aWQeRFqmi6NNcFJkYggjK6Hd32p1kH008pPxWpEEbrYrHIgOYgtKhBA/wARDdB9sFT50VEdsvuu0xqpQ96K3wkFVNpbdxeFhebE5bCyqqJlJdt17uRYAEnuqlBs+I5XWPEgC5vDLFiENzxIKEgcKp9LkVsG0SzSM+dHCTRyR3sbEBmugsGP0huqo1sk+xD7WApukTzM0hyOdS1iVKgDX2W1Nb3od0hiMChTcqDe7KovfUZmYC+u6uYbM6J4qRvYOGv9bEwa5hYiwYtuJG6ujz/oywp1GHI0sTE8uumuWzkWv2VeeGGLuAsc8jVSCLbehxsbfJbSOLagoDe+ote+7jY0LaHEAqDBKNRmYRuwsTY3IB86xm1ui0mFxcWHjmYfKAMhkGsZV7AfWtmPAb91GU2TtiG6pPBIBr7zIdP4VHrWE8afKZrDI1w0dC+QYNSt8gJ09p2Fz2AtvoN0kMcTqIrWK3PtM3HT6VA8H0n2pCCJtntMdxMeJIFuFgpcjvoThem2MjnHyqAiF2yqJUBy3BICysvtG43HvpvG5KkwU1F20bTo7hxPmBLDLbUEHf4dlWtubN6mMydYTqBlK779uYfCgeyumeF6u8iiGXiHhMeYjirIfaHgKixHTzCuuWTDu436O9r8LAjTvoWOdUDyRuy3sPAnEO6oVBtm9oWG+3C9GW6OSqLnIbcnIHqBWL2f08SNyYsNGgtb5yUtbtPVn4Vo4/0jYN48ssjoSLMAuYDubKCfKhY5pcg5xb4PE1NlIN/rDf8AxH8KuPsqYC/VufC/+mh+Cx+zmZWjxoFiDaQZQba8QK22G2orgFZImHCzD+9SlL+ZFNx/lMbiASMsi301WQXH3WB9ap4XZ0CEskCKfqCw+6ht6VqNo7LmkkaRHUX3DORuHO1G8NhkEarJHcgAElQxJ4m++oTbtNFNJU0YZoYiNQR4g+V7fGosZs5ZI2VHAZlsDqD48D50e25Fkc9XCxSwHuSEX47qv4Xo7C6KcxBKgkKQLHjwvUJJvgp2lbMTsjZE0GFyau63Ps2I/lJ+NZHZW3XfF5HHEgoQVK99rMO+umbW2YIDl6w66gkG341YTYmJsGXK+gIu24fxVaa5IkuEAY8QubIHxEbDX3zIp7utziocSsr69cjEaWdFU+JQkegorisCZPZeG7A70FmDdhjIIodisKq30cOOd7+WS586ScvY2o+gRtEsFtJCD2qwI8iBas9LgoG1GZfC/wDpNbpZ1ZcrjhrmFiPSsj0g2JZusU2TibE277VtDM/JlPEvBCMDYeyyN42PlVeXCNxQju1+FUmVwuZGJTmDpVf9YSLufz/4rZTTMXGieXZ6G+ZRfusfPfVPq4UYBosw5hrfgb+dEYdrFhlca8xv9ajklC7xmB4m2niBT3Qa2bTZvQvAyIJN4IvvFqtf+jdn8k+8tYnC7S6k3jZkv+6QVP8ACd9Wm6TAn2ghPEmP+1Ll9mPhd0dG2TtmCWwjRc37hYxt/DbRvCrG1dgx4jVoJY3/AMRG6y/D2lJ19DXKMPiO6tTsfpTiI7BZCRyPtjyOo8CKT578hXouYzoxiIrlVLL+8oN7dq8PhVJMYyk3UX3G9je1a/Z3Ta9usBU81AI+6bEeZohNFhsXqeqLHjrG/rox86xcPRopUYL5ZuzILcha3C9t+ugqZcYu6zLu3MQPStNiOg7AHq7G+oDEr5EXoTLsHFJ70LW7g4t3reoaaLTTBk8h11v3jN/Wq2C2yEbJNHdcxZHClgCwtqFs6HT3lvv92+tFFiF7GNgfq7vI7qc2FB0ZSftCx872qVKhuNiWOOTVSSRqbKuJI77AYgeQpSTgMq9euptZZnVxpf5mcSa9mlO+QKcoYCy7gyhgPgR4Vj/0iJZog5ZolVmGZ3feQMoDE23DdzrbHJSlTImmlZrpFaQFbIwv7zIl7fwqB6VTwnRpVmEnyoixv1SN1abtxANzz31isJsxzGJppOqXTIoLKFGtgoVl5HW9zY2BAvVibESLlb5QxUj2WUhlOp1uQM+5hdtbqwOor0sGkparg5cjaVnTThWLK59pkN0ewdl7VJuR4VfO1pB7wRvtIL+Zv8K51s/pJMm8RyjmP2bf08hTumHSXr8FKkfWo3s5gw3pnUOAwubWOovuB4Vvl+M4q5RTM4ZrdJhba/T9ELogwcja2GZ0t2M6kKSNeW6sNtLa00mrSAgm46rSMb/dYXJ321PhWQUV0roV0fw5hLu4DsQpvwFgcp5and2DnXJjwxk7qjWU3Rndm4ORjmUA25m2vkaL3KfOIQP3gcyjv4jyrVL0dKfNOtv3Tu/PjUGNwUyo1obtY5SNVvbS/IVq8Ml25M/6gCeFSLEXvqDxHaCKzmOhOc31a1/tAbyBzt8DV/F7amguj4SMAiwMqHTgMjIwse5jVoYTNhYXYgS+8rAg2IJyk777lv21jz2aHRl1RmYKoFzu4eZJsB20Uxuz5MKqsZY7tewikctpa99APpDjz5UTOz0mcPly5x7oHuyAjrE7vpL2G2pU1GZHga02CWaMEgZhplB3hspym1jwNJgkM2N0rkjPtgSD617jmQykEd5vW+2B0hXEG0bZGtcr1rgnsU5jmt3VmYI5MLIXjw0AViQFl1bLvKLJGUJ3bzm3C9682ttDBzD2oJMLiF0WSF1lizb1V/dOvC9jrpfccZRUvBtGTXk6f8sxIWyu/Cx6yMn1jvbXnVhdoYkgXGttbxqR55h8K5t0Q6bGOQQ4sHlm49+o1/PaR0VelOAzFGxQRhbSRGTfuINrEEagjQjUaVhLHJG0ckWZrpFs7Ez4iGUaIrhnjBkjDi0ehCXB9079fa761cO3mXQwutrCwdj3WDrYVYw+Ow8nzeKgY9ki38qsnZ7NqLN2gg1m9vRa19gOLG4brRIevDA5vaCFbm/LWiGP29h5EZOsUEjTOraX3HcaU2zXF/YJ/hvburPY3ZxJPs2J5gjQVC4+xb5+5ewMWGa/XSQudMuWTIQOOns/jXm19npfJEjOtvoNmPoDfxofiNkoUGZRfkDr8DQqLZgz2ylQN2tr9g0vTpUFu7JdsdALIZUxWU2LMjxi2g3XDCx8KzS9Cp5xeKSJlXfmLKb9nsketabGYWRWAjeReYEj28b2pjRYoC4xFxcaMoJHib1onRm1Zgsb0XxaSdX1V24WeM3/AJqin2biYR+1w8qjmY2y/etl9a3/AFWJDByY2b6LFTmvwva3brUO3MdiGUJIquu85bg+G+tN2RojmuKBUWIIU7rgg+FSJKLDQV1f5WwgEWQBcmhLa/C1BP1UBvS5+yh/Ghz+wKH3MhExq3FMBQ2Kbt86spJ+eFaEBaLFEcaIYfaRHMd39KAxkVOmnGkM2mzek0ie7J4E/hurSYLpm301U92h891cuSU8gatRYkDmPhU0OzrY21hZ9HUX+sAfIjWmtsfDv82SPssG9G1rmEeMPZ8KvwbUZeJFLVDtm1fYcg0DK47QUb8RXHekkDTbU+TPf59UOtyqCxNu4WaukYLpLKPp3HJtR66VnNsbODbSgx4yqrSRxzjgDIBAso7PaW44WvxNVBKLJlswTjYlmncSWWOJbWuPYawzC3fZB2Io4UM21h0ijyIbqCjqQQQVmF1sRofmydP378a2uFxcEWJxcOITL1zNICfZOWZc5GbgVvbTiCOFYHpbIqyLDH7otkAvcRKoEYJOpOjEX1sy8a3xSqcWZzX0sopJy9KnjxHBiSpBVhzVgVa3bYm1Mj2y40kWOSwtaWNWa3a9hJ/NT/1lhDbrIHj7YJSRf/LlDE/fFfQPPFxqXY85YueGZzFQlHKHUqbXG4jeGHYRYjsNGYsriZDvY5gd4tcSDTibAgfaoh8j2fOAflrBwLKskfVErvszlimlzY5hobcBRHD9EWymRH3BcrAZ4yFVbNdbneD7offw4+fixLlJprlHTPIlV8P88lHA9J3jAXKjAWACEwmw03aqfC1H8J0wsLsJ0HAlc6+GTXzrJ4zZTxEsYzkOhKWcI19bFSQR2bwN9jvhjkIsQdOanQ1xNzg6NlTN1tHpbDNh5oyyPmjZbaq/tezoCND7XburPYTpFhoLiPCqAbXBOmnEjLr50NlkJAubk899u/8APCq0OAaeRYkBud9hc2vaw4XJ017TuBrvhFxw9SXcwcryaI1kPTHZ50eB01BLAq1yNxINtaO4JcNi0KQYhjmFiuYh7cbh7kju031lcTs7CYVQHZix4RWF/wCIozP3nKDfQWodicEtuugZhlIzBhklQkgBrgAMpJAzgAqSBrvPLHNFv6kauDXY1e0f0cz+yYpBIFJOQnIxBtcDW1jbhqaozwOidTLhX9lTHaJwXKG2ZMsqBgDYGw5b60XRPpa7oI8QPbtdJLW6xe22mccR4861ON2hHJC3WQ/KCqkogsJCQNFVuFzarliT5r91+f8ACFNp0cimfDsrLIZxlsAJVBkQ8GRl4aWIN9CNNLi5sbbcEdkkmSVBp7asjLrrYN9G+tr7ySLXN7WO2kinJiIpcMdLLOokjF92WRRpv3kDfUcmBRgGjZoyfdeGQgMO0nMsg7NKn/yua/htS/w/7D6qi/q4Bcu0GfFFeqRsP1lxpGSIr2ISRQCw3hb8bDTUVpkweAv+zxM8J+sk6W8QLetZ2QzQsS0SSg6F1QQy2+s0ZF/vC9OkxayKuSVkINlSU3sbaKt/aUd2cdtc08TTqSo3jNPlcmyway/+32xfsM4P8rGikeJ20nu4hJR9ZEa/iKxu0ICIY5o5Bqv7SOQjEIHBsQesuyKbAixGhGlWdhzwOgMmFEZIJDYWR4wwGhIXs4gajlULBJrjkrdGpbpLtNfncHh5P4WU/jXg6bW+d2Yw5mNx/QUIG0ol93E4+IcCbTJ53by31Km2Sfc2lh37MRDlPwX41i406aLT9BROmezz78GJj5+yG/E079fbLk0GKMfY8TfhYVQ6ydt0OCn/AMqXKT3C5qpiI1/6uzpV7Y2Rx62o1QbM0cHyVvm8fAeQLZfQmpH2NKxDRvE/2JBWHlwmAY2KTIfrQsR95ARVc7IwRPsYpVPIsyHyNqNEG7OgtsrEi94iR2ZW+BppgnGnUt9w/wBKxUOycQvzGOf+Ca/perAG1xoMXN8fWjphuznyvUqN4d2tUVPbUisa1ozCMcv53H1qxHN+TQxZeYqZJB3UhhVH/INTLNzv4/1oUrdtTJKRxpUAURgdxFTI5FDEm5jyqdJhwNFDCQc+POh+P+VMjoOqdGUqQc6kgi3O16mjxJHCrMWJXu+HpSAD7V6Q4holXFYFJZUFlnbObjiXCGzE6ki4UkkkEkk4uTFszmRwHJuTmzAH7pBHcLV1aNhwI8P7VHiMBFJ78aN2kC/mNapSJcTnUG0IbWeJwP8AtyXH3ZAwqPHRQMQ0MjAnekoAt3OPZ8NK2eK6IYZvdzx9xuP5r/GhOI6DP/05Vb7QK+ovVbCpmY+RSbwhYc09sea3FX9mYSYENhpbScRHJ1coIO7LcMf4b1LieiuKTUR5rcYyG8h73pVGeeZPZkzfZmXN5CQG3hWkZ0Kg1L0hxsTft1zNuvMhSQgcDImR2HeSKTbUw0oYvC8Ulic0TIQTwDAhQBfsY1SwnSOVBYEhbWyqzBfuNmj/AJKjxWKhlYsS0ZOpASPJe1jYRhbE772rbqxfcivQ58TetX0JUJDPiSL29gfcd2F+Byxst/8AumsccESMyurDxHmbZVPea2fQd2fAYyBLGRWWQAEG+eKVUAPG8ixr3yCq+R8jeFInFj1lbCO0tmRowMjKCd7FlX2yASSzEKBqRv3AcqFAiPE/J3+k3VsD+65MbjTj7w8L8q1O0MRgsbhAkkuRsocFRlLI9jbUahtL8RasbicQHxhl3pH+0LfVT2/U6DtIrhwtuCs68/E3RZ6OL1kTo0kaOjDq87ZQxIzNrrYht1wN++ikG2ypytw0IOo5EfEViNnYn3r8T+AFX8M6m4uBY6DsOunjevX/AE2SeRwl2f8As875aeikvARnnx65kJknw9/2ZkWSYCP6PtKCQQLDU7waAyYzq2Jj/YOTqAbRt9uNx/W1FZtp4nDp1uHlZHS6tlsQ0TkEhlYEGzAHUfSNeQ/pGnOk8GHmHHNHlJ7f2ZVb9pU1zfJxPBlcV+xrhmskE3+5LgekOgE6ZL6Bx7UJ7mF8nmR3UUkhRhcWNxe4sbg7iCN47RpQuPpDs2TV8E8LfvYdt/8ACvVjzzVHFtPCoSIJHUXJCShcrd2S3VnuXXS5Irp+P+oNfTlVr3+dzDL8W/qxumFOtZb21JBUniQwIYN+8CCb3331qhh0EdwoKqTfLfcRxBB9d9PfHKwuunAgkAg8u3vG/s3CDrze7IxHGwIv3Gxr1Y/HwbdSNfn59jmjmzVq0aTZ20RplKpIAAC3zbqo0SUcVtpm3rv1FyDgxMEoJfAyDKSj5TG5VxvUgkHiDu1BBG+ub4jHLf2Qy9jNc353CratFsHazzLkjxJgmQbwwAljUE2ZTocgBI00AI3ZQPN/UfixcN4nb8fM7phLF4DZp1brIT9eKRB5gWqqNkx/+22h4LPb0Jp820sehsXgm/zIl18VymqeI2tm+f2bFJzMbsvowIrwUzudEs+Cx67py4+vGsg87VUkxeLXR44HHc8Z9DaoxjNn31hxeHPNDdR/9bKTViHFYc/NbVcfVnBt/wDoh+NaJkUUmxo+ngQO2NkN/Nb+tN/WeH/wcUOy7/hJRYYTENqkuExA7AoPmj39KacFieODTwklt4ezTtCpnPgaespqIV6DVCLKy1IslVAaeDSoZcV+VTLMR21RElPWTw/PKlQwimJFTpMDQwSdx+NOEg7qQBdZOTedSLOeIv3GhKTHn51MMRz/AK0UMLx4le4+R/PjVyPEnn56/GgSSg8b99SCS39qVBZoFxZG8eX96lTGD/nSs/FijwPn/arCYzmPLX4UqHZoFlB/P9Kez3FiLjkbEeVAo5lO427j/wAVZWU8G8/yKBjsTsDCSe9AgPNAUP8ALa9BNodB4zrC7g8mysPP2SPWjvyphvXyp6YwHc3n/enbE0mc9xPRvFRnSNjb6SAn4a0uj+1pcDiBIEO4pJG10zxtbMt96m4BDDUMqnhXSlnPLypSFHFnUEcmAI8b1WxOnozO0Ts2c9bHjmw9zmaKSCRyCTc5RGMo1JJysRe5AQaDP7X2lHl6nD5ihIzySAK0hBuAFBtHGDrYkkmxJ0AGzxXRrCSf9IKecZK+m6hGJ6CIfm5iOx1v6i3woTSCSbMzFg5QNFuN9wy2+NSRySIbmIMOTrmHmNR4GruI6G4pNUCvbdkYA/zWqjNFi4feWVRzYFk8zdTWsMji7TM3D2WV2mm9oMtxZgjsEYHQgq+Y8edC8Ts90Ga3sX0Nwe69joasx7eltZsjg8GUW/ltVVp0N7wqPsM44/WZqvNmnkq/AQjCNnuCxOQ6i4ot13HUehoRh8QqMGyXtwYgjxsB8avYjaUTjWIqx3lWa3kxNdGD5XTVPkxyYtirjsVfSwIvfW+8XA3HtPnVcTke7dT2E00qP3h43/pXnV9o865pzcpORrFUqLcG1plOsjkcicwPeHBU+IolsGaXFYyBCVW8guY44ovY+nfqlW91uNf3u2gsOEdzZFLHkvtHyFaXod1mEn66SB8uUrqrg6/u2B10G8eVQ5uu5aqzrWLwobeFPeLULm2UvBSPst+GtavB7JmkiSQLlzC+SQZXHeOHPnqL23VWxOy5l96E966/6b15uskddpmOl2QOJb+JQapz9Ho24DytWpkWx4g8r61WlH5NNTkgcUYzE9Eo94Hl/aqp2BINBJKByu39a2cinn5/3qA5uQrRZZEPHE5MK9zVDenBq6zlJw1OqDNXoagdk4anA1EJedOBHCgZLTgxFRBq9D0hkyyD/ipFftqvevKKAuCTmPz3ipFl5Hz/AKiqKyEU7rRxpUMICc8RepFxA52ocrcjT854i9FAE+tPHWpUm5Eig6y9pFTLOew+hpUAYXEsP7GpVx999vEW9aDjEc7ipFm8aKGGY8QvAkdxuKspim4EH41nw47vz5U9ZCNxpUFmhXHc1qRMYh4kVnkxrDt/P54VIMcDvFFDs0iyX3MPGnrI3/GtZ1JxwJHdUy4huDedFBYVxGGif5yKN/tIpPqL1Tk6O4Nt8IH2S6+itTFx7DeLjs1+NSpj17u8Wo5Apy9C8I3utKn2WVh5Fb+tVJegKH3MQR9pAfxFHhODx+Bp4l7fW3oaLYqRlH6AS8JkPerD4XqE9A8Rwki8S4/8K2qzn8/2pwxXb8D8aezDVGHToNiwQVeK43ESMD4ezetFsmHbcHzeOsP3ZJXkXuyujAeFFziBx/p8a9E/I0WFI2uyOk83VqMSimS3ttCSFJ5hW1ovD0igO92U/WB/C9c0+WMKcNpHjepHwdT6+KUb4378p9DrVTEbEgP/AEyv2SR6bvSudDHjmPhVnD7ZlT3JGHcx+FFX3D+jNTiOjKH3JCOxh+ItQ9ui8l9Gj82/21Vi6WTD3srfaX8VsatL0u/7Q8GNvWjWPoLl7Pnu9K1Mr0GtjE9r0NSDUqAPQ1OBqO1K9ICcPTs9QBqcGoHZNXt6hBpwY0DslzV6GqPPXtqAJK9VjwNQ617noCywJeYvTgw7qqhvzvpwalQ7Liued6XWcxaqganiU0UBbWTkakExqlnHLypytyPnSoZcGIFSCUHjVDPzFIMDRQF8fm1OEpHHzqgCeB869Ep4jyoAIjFEc/j8KeuNBoYJ6TPeigsLriF7qmTFMNzfnuoCHI3GnLiDzooDRJjyP7aVKNoDj6/m9Z5cYeNSriwePn+bUqHZoFxg/wCD+Bp3yhefncUBEv5Bp3XUBYd6w8D+PwpnXtQXrzThjG/51+NAWFvlNLrxzoYMdzH5+FI4kGigCq4k8Gp/ytuX58qD9dyr3r+2igMdlrwilSrQyPLUr0qVAHoanZqVKgBWpUqVAHoanXpUqAPQ1e3pUqQxwavbivaVAxpFK1KlQAr17elSoEe3r29KlQMcspp/WA7xSpUDPQRwNOzGlSpAeGQcRS04GlSoA9N68vSpUALNSz0qVACz1IuIbnSpUASDE8xTxOOdeUqKAd1gr3PXlKgYi9e9Z2mlSpAf/9k="
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Sea detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Blue Sport Car
            </h1>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod natus exercitationem ut eaque odit, cumque error non fugit animi,
               ullam aliquid deleniti molestias omnis eos itaque quia hic eveniet.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={""} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="data:image/jpeg;base64,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"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Sea detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Yellow Sport Car
            </h1>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit atque quod ducimus, pariatur optio nulla quo minus? Officiis iure voluptate
               necessitatibus delectus labore! Enim voluptates est nam, quia pariatur ullam.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={""} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZzrZMxaeOpvRAjLrv0Yf-WgLqEWPRYeunw&s"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Sea detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Green Sport Car
            </h1>
            <p className="leading-relaxed mb-3">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos obcaecati dolorum officiis omnis commodi libero iusto est aspernatur. Facilis
              exercitationem minima fugiat voluptates, asperiores ipsum voluptatem at saepe quo?
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={""} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>











<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcyqtw9qiyV-WXRtlI-SMNR6s_Sqv8-dBAg&s"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Sea detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Black Heavy Bike
            </h1>
            <p className="leading-relaxed mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident adipisci tenetur tempore animi dolor accusantium quis ipsam earum amet
             cum nisi officiis debitis reprehenderit, maiores unde reiciendis! Perferendis, modi.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={""} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30YSNnJKsMY1gw5sX5FzcxdZmrdrXrXnseQ&s"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Sea detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              golden Heavy Bike
            </h1>
            <p className="leading-relaxed mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro culpa cumque, est aliquid nulla, laboriosam tempora itaque dolore
               ut perferendis velit nisi facere eligendi debitis error rerum, temporibus dicta.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={""} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hTOPhK5BCyvgvoqlOOz0Hhe3VNhnwAdUwQ&s"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Sea detail
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Yellow Heavy Bike
            </h1>
            <p className="leading-relaxed mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quis quaerat fuga, quae odio laborum suscipit voluptates itaque harum repudiandae
               maxime magnam rerum iusto quo nulla delectus. Placeat, accusantium temporibus!
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={""} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Hero
