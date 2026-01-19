import { useState } from "react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ProductCard from "../components/product/ProductCard"

const Ads = [
    {
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCKUHa8ULB0nVSXlTFNIiuizd9QayJuhDkvyVPRFnzGo1rtK4Sf76OPUmu7516u-EImRWibqU8rxhfYNEgaxiNOm0kOFH6svzbIdDe6XqWzz4JRf3DLuKvdirB7zXp87THL22LfuiA-7dLAk9dpYr83EnHvyBH-nvjtS_JcBrqUlzKdQLC1zMEhxhkN8BShLQIf0leq-T0m3_TQMhv_OhhavtKHAx2SY4bCF9JNNqCTjwCdCgkyy2mmtiQfr6lZSd_nJkpLMPGcZg',
        heading: "Summer Collection",
        slogan: "Up to 40% off on premium styles for a limited time.",
        tag: ["New Arrivals"], //use capitalized
        button: "path" // redirect to the collection
    },
    // {
    //     img: 'https://m.media-amazon.com/images/I/41oh8v5vAYL._AC_UL480_FMwebp_QL65_.jpg',
    //     heading: "Winter Collection",
    //     slogan: "Up to 40% off on premium styles for a limited time.",
    //     tag: ["New Arrivals"], //use capitalized
    //     button: "path" // redirect to the collection
    // }
]
const categories = [
    { name: "Men", Path: "/Mens", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoBwJzrqvN3rbepx_4tGprclxjqYoCNzcwh2YglHwOTjMkxHG6cIhGXjlRQeHqLgd629q2YGeOD6Ag39LUdHvHYkuypKnBu8uwqOblqDoYVf2HrjDyAqqEXmdjDTHFOR1lOU3x5plGrknZSIwe2e96qAtzFOdyTjthsVNxl2--HVexk2BkeRVmfTr4Kz8X5pX40h5DFps6lsS4lAh2aqhxCALwQCwcBIiXtcNjkCouE9_i7zJF0bPAylfeKcslohj-d7TbEBlQpwU' },
    { name: "Women", Path: "/Mens", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAme7cFlDCiFOaKbllfOB6Gl3vJ-Bn4lLTF_1oWLJo_PmbvCn_hNCd-IP9izmCFMhCUl9XakGI8k_8MRMbmW86Lz97nt2u_J6W4Zr7rPK5xsOprFEcbeZ34zRcDiYmbE-HChqJBfmA-A3Gc-zN1Ljeg4YKRVaIUjCH6duMnrP1rzn79rAaIIj1zvf4_r7BaDIQLMbd0Qzx3Dd6MTTqZWBF03Mgy35X3KoRTPloMZOkqdavwmLGcvT8OmNFz_G4IAL-vmqv8bVRAPV4' },
    { name: "Kids", Path: "/Mens", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF1iij5gJ5ZxFmQFNJ3Qjpw8v4unL61imt_Aw-kI-phLzQ-Ff_JayCoFFo1g287ephUF-WOMcFCWBR8C-2EhzPkREBvhPpoqVUKBS8HX5IyRtBrTxrQDQrlS3TQZfvGD1eek1zGIPZmWONqn44ufmDYsdhEu84IjsWP7xOfC-ggiRAa17Ya0bYkNMIs_Km_iqSED0O_-vvJOaH5LkBFzkHhmiYmTOnX16LfOnf_fro2RKv6EheOy0KaSCm2ibx_0l-um0bXOtJLCw' },
    { name: "Tech", Path: "/Mens", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeHUn9v0t93ZrSaUIA6lMAo532DwnpTljqY56Aex0Pu_SHfW3nkJJcOApB3zOLBGDIeyv_O85G6D7Ggi18J9hr0-9upkfzM7f4SZockiuFXDdwWgeTDLKH4CdaWT0fVDEWjsrGPgwwvM2g7wSGLrvRJP6_5Fr3Vx-SK3MNrMWudwf35Elx_8L5OS0d7Y_WiQzUGuhfU7QAVD2MEOzlx3nlzlhEI3v05-uG_Z9reAeGYkLzkbDuSHwuC7dNZWOao1sxM9OXyoekIn4' },
    {
        name: "Watches",
        path: "/",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzaOpWrMPgtjS7jyuEIoiJI84uE6DErM_cN7ue1tv2suaQCAe8nfu65fL7LzfOPV2_nAwL_WZ3c3Be9g58XG3xQ76LhyndmZ9fJaLMCbWqXpzVtOxr-8R4CwDR67OlgXWVcYbdikP6ZhoGzUiePw9pI8qCcjQUtBbyYb9UvuUom6bEu3IcmPcWFjaXExO8O5mAS4QicGPG4kvGrXn_PWqhWTgKp06PcYRo-slBuglPWMLvpeZzsq7fJzjiXh9u-oWC7ch0ghliTMM"
    }
]
const Products = [
    {
        name: "Premium Headphone",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs_4rkct5Mvqvm4BI2uw1aXPqW_v1--bV8l-d8M_p7CUeiL6vDC5lxHbQgZJBzg_bMSb7y6mdZCC9EIrzXQrLQOxAMP3j-UrRymaBXj4jQxz2PHZWz4-G7Xre_swyIt9olRo8kGsfj2e4mvAqhG1cli84M7q1ylVN-ZVPZzWKHXhjzKQvFypPZ1REZi1LhE0AC45scAxvbAQwOma82StYKcLPEQe5cr9VlxyvWZfHGmyYSVTVP0d2mhsqdDmwLLSUI5IDERtZhsNY',
        price: 299,
        rating: 4.8,
        reviews: 120,
        badge: "",


    },
    {
        name: "Urban Runner Red",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0iu1IBha50CqN54BxodL3yEdxwScD42vE06Y7MS2ZXtCGkl0IlkTV0167XFPvageAyv05gnE_ApbNfb3JHDQ_7Vz6_8HqUUbYebvfm0LKbcGDT9SGF2OJhG_CkwbQ-xFSAt9iLssBbBE6l7Q7udCv12A6VTRYZJygD0TlCZXMlyaSsZIl8N2sIvdep4bleumlgdzv_q4My-MiG07WfCQw6DpUxM9rimkqQa62B2bZWW7YvdGPsp8mTt_Apz6xBqx8ktEY8vs3tKo',
        price: 299,
        rating: 4.8,
        reviews: 120,
        badge: "",
    },
    {
        name: "Retro Instant Cam",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu_DL3VkfbhFM5BimxaIIQ0JYWgn-PZXfcMladrln0rdI9ZRyLe0MvDaSuOLQP2S193CqOTuTtaEJS-vvhRyjdKq_FUWA7b3RMyxkBKzzXIiyq5heE5img0F07A-EdZ-F9uN0A-4VLnJMTTLXqxBckdMdq_2-oUAhls5OgmgzUdDtdm-AUV71kmETn-yAMSraasvjbZdExIC-DTXnrK-uz6-oGH5aTquy2Z-R-gL0cK1vYA0mSE7X8V3gGrS7GtkWynqJSfSgIbes',
        price: 299,
        rating: 4.8,
        reviews: 120,
        badge: "",
    },
    {
        name: "Premium Headphone",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnOsj9RrHSfyBsQiRKkrocyXrAX1TcEj3i16aU_jpIsz24SBg2f-6xMBSQpKEwfkd8MMiMUoeycxnEZTfcQtpheb2XM8ZSzdWpBMXfopgMGQI3gEtqKDtMTlFWcvj7JEpjs34tC4Z_4qwEGegbWTWWbXpRNHmvgpExZ1hD076dRiCz2QfZFIE-5Jst24jbXsOQYa7ckitVyxWEkiR9J2pJwKPjVd_JAylkGT0R74jSDZp6xwbk1jbz3s3wv-h8QZFcmnzwhNVO9Ns',
        price: 299,
        rating: 4.8,
        reviews: 120,
        badge: "",
    },
    {
        name: "Premium Headphone",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs_4rkct5Mvqvm4BI2uw1aXPqW_v1--bV8l-d8M_p7CUeiL6vDC5lxHbQgZJBzg_bMSb7y6mdZCC9EIrzXQrLQOxAMP3j-UrRymaBXj4jQxz2PHZWz4-G7Xre_swyIt9olRo8kGsfj2e4mvAqhG1cli84M7q1ylVN-ZVPZzWKHXhjzKQvFypPZ1REZi1LhE0AC45scAxvbAQwOma82StYKcLPEQe5cr9VlxyvWZfHGmyYSVTVP0d2mhsqdDmwLLSUI5IDERtZhsNY',
        price: 299,
        rating: 4.8,
        reviews: 120,
        badge: "",
    },
    {
        name: "Premium Headphone",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs_4rkct5Mvqvm4BI2uw1aXPqW_v1--bV8l-d8M_p7CUeiL6vDC5lxHbQgZJBzg_bMSb7y6mdZCC9EIrzXQrLQOxAMP3j-UrRymaBXj4jQxz2PHZWz4-G7Xre_swyIt9olRo8kGsfj2e4mvAqhG1cli84M7q1ylVN-ZVPZzWKHXhjzKQvFypPZ1REZi1LhE0AC45scAxvbAQwOma82StYKcLPEQe5cr9VlxyvWZfHGmyYSVTVP0d2mhsqdDmwLLSUI5IDERtZhsNY',
        price: 299,
        rating: 4.8,
        reviews: 120,
        badge: '40%',
    },
    {
        name: "Premium Headphone",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs_4rkct5Mvqvm4BI2uw1aXPqW_v1--bV8l-d8M_p7CUeiL6vDC5lxHbQgZJBzg_bMSb7y6mdZCC9EIrzXQrLQOxAMP3j-UrRymaBXj4jQxz2PHZWz4-G7Xre_swyIt9olRo8kGsfj2e4mvAqhG1cli84M7q1ylVN-ZVPZzWKHXhjzKQvFypPZ1REZi1LhE0AC45scAxvbAQwOma82StYKcLPEQe5cr9VlxyvWZfHGmyYSVTVP0d2mhsqdDmwLLSUI5IDERtZhsNY',
        price: 299,
        rating: 4.8,
        reviews: 120,
        badge: "",
    },

]
export default function Home() {
    const [index, setIndex] = useState(0)

    return (
        <>
            <Navbar />
            {/* Ads section */}
            <div className="w-full relative flex justify-end md:justify-between flex-col-reverse md:h-[60vh] h-[130vh] items-center md:flex-row md:items-start ">
                <div className="text-black md:flex md:w-[33%] w-full flex-col h-[60vh]">
                    <div className="heading ">On Sale</div>
                    <table className="gap w-full md:w-[90%]">
                        <tr>
                            <td style={{ backgroundImage: `url(https://m.media-amazon.com/images/I/61VHvg7wvCL._AC_UL480_FMwebp_QL65_.jpg)` }}>
                                <div className="offerTag">Upto 65% Off</div>
                            </td>
                            <td style={{ backgroundImage: `url(https://m.media-amazon.com/images/I/71oW9ddfGsL._AC_UL480_FMwebp_QL65_.jpg)` }}>
                                <div className="offerTag">@35% Flat off</div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundImage: `url(https://m.media-amazon.com/images/I/81EvwnQJXmL._AC_UL480_FMwebp_QL65_.jpg)` }}><div className="offerTag">Buy one Get one Free</div></td>
                            <td ><div className="h-full w-full more">
                                More....
                            </div></td>
                        </tr>
                    </table>
                </div>
                <div className="Ads">
                    {
                        Ads.map((el, i) => {
                            return (
                                <div key={i}
                                    style={i == index ? { backgroundImage: `url(${el.img})`, zIndex: 99 } : { backgroundImage: `url(${el.img})`, zIndex: 0 }}
                                    className="ad bg-no-repeat z-0 md:absolute md:left-1/2">
                                    <div className="bottom-0 z-0">
                                        <h2 className="font-extrabold text-3xl">{el.heading}</h2>
                                        <p>{el.slogan}</p>
                                        <button className=" bg-blue-100 text-blue-700 font-bold text-xl">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                <div className="text-black hidden md:flex h-full  md:w-[33%] w-full">
                    <div className="map flex w-[97%] text-white h-full overflow-hidden ">
                        <iframe className="absolute" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8342126484986!2d-122.01385205129783!3d37.33464282724617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1768729148061!5m2!1sen!2sin" width="480" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="font-bold text-2xl z-10 w-full h-full bg-blue-900 flex flex-col items-center justify-center ">
                            Area Explore
                        </div>
                        <p>To Get NearBy Shop </p>
                    </div>
                </div>

            </div>
            {/* catgories */}
            <div className="section heading w-full flex justify-between items-center ">
                <p className="">Shop By Category </p>
                <p className="font-semibold text-blue-600 gap ">View All</p>
            </div>
            <div className="categories flex w-full text-black bg-blue-200">
                {categories.map((el, i) => {
                    return (
                        <div key={i} className="flex items-center flex-col cursor-pointer">
                            <div style={{ backgroundImage: `url(${el.img})` }} className=" h-24 m-10 w-24 rounded-full "></div>
                            <p>{el.name}</p>
                        </div>
                    )
                })}
            </div>
            {/* tranding */}
            <h2 className="heading">Trandings</h2>
            <div className="tranding flex">

                {
                    Products.map((el, i) => {
                        return (<div className="list h-40 " key={i}>
                            <ProductCard product={el} />
                        </div>)

                    })
                }
            </div>
            <Footer />
        </>

    )
}