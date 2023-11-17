import Image from 'next/image'

async function getTest() {
  const root = process.env.NEXT_PUBLIC_API_URL;
  const url = `${root}/test`;
  const res = await fetch(url);

  const data = await res.json();

  console.log(data);
  return data;
}

export default async function Home() {

  const data = await getTest();

  return (
    <main>
      site {data.msg}
    </main>
  )
}
