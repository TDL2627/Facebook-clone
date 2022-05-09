import Head from 'next/head'
import Header from '../components/Header'
 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facbook</title>
      
      </Head>


      <Header/>
<main>
   {/* {sidebar} */}
      {/* feed */}
      {/* widgets */}

</main>

   
    </div>
  )
}

// export async getServerSideProps(context){
//   const session = await getSession
// }
