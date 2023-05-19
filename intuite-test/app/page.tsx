import axios from 'axios';

export default async function Home() {
  // API call

  const { data } = await axios.get('http://localhost:8080/multiples');
  console.log({ data: data?.multiplesResult });

  return (
    <div>
      <h1>Test</h1>
      <h2>Results</h2>
      {data?.multiplesResult?.length}
      {data?.multiplesResult?.map((item: any) => {
        const key = Object.keys(item)[0];
        const value = item[key];

        return <div key={`i-${key}`}>{value}</div>;
      })}
    </div>
  );
}
