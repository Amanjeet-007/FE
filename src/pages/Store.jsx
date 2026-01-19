import BottomMenu from "../components/layout/BottomMenu"
import Navbar from "../components/layout/Navbar"
import ProductCard from "../components/product/ProductCard"

export default function Store(){
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
    return(
        <>
       <Navbar/>
       <div className="All grid-cols-2 grid self-center md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-20">
        {Products.map((el,i)=>{
            return( 
           <ProductCard product={el}/>

            )
        })}
       </div>

       <BottomMenu/>
        </>
      
    )
}