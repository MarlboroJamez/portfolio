import React, { useEffect, useState } from 'react'

function OversoldReversals() {
  const [tick, setTick] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
      try {
          setLoading(true)
          const res = await fetch('https://sheet.best/api/sheets/5c3f93d7-e671-4cc3-af51-7cad647bda7f')
          const data = await res.json();
          setTick(data)
          setLoading(false)
      } catch(e) {
          console.log(e)
      }
  }

  useEffect(() => {
      getData();
  },[])

    return (
        <div>
        <table>
            <thead className="md:m-0 mt-32">
                <tr className="md:text-base text-xs bg-gray-200 justify-evenly">
                    <th className="border-r border-l border-cyan-500 p-1 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium">Ticker</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium md:table-cell hidden">Market Cap</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium md:table-cell hidden">P/E</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium">Price</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium md:table-cell hidden">Change</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium">Volume</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium">Float</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium md:table-cell hidden">Float Short</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium">Short Ratio</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium md:table-cell hidden">Avg Volume</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium md:table-cell hidden">from Open</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium">Gap</th>
                    <th className="border-r border-cyan-500 p-2 md:pl-4 md:pr-4 md:pt-2 md:pb-2 font-medium">Rel Volume</th>
                </tr>
            </thead>

            <tbody className="md:mt-0 mt-6 md:overflow-visible overflow-scroll">
                {loading ? (
                    <tr className="text-center">
                        <td className="text-center font-bold text-xs md:text-xl">Loading</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl md:table-cell hidden">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl md:table-cell hidden">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl md:table-cell hidden">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl md:table-cell hidden">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl md:table-cell hidden">...</td>
                        <td className="md:rotate-0 rotate-90 text-center font-bold text-xl md:table-cell hidden">...</td>
                    </tr>
                )       
                :tick.detail ? (<>No Data at this moment</>)
                : tick.map((ti, i) => (
                    <tr className="text-center text-xs">
                        <td className="p-1 font-semibold text-cyan-600">{ti.Ticker}</td>
                        <td className="p-1 md:block hidden">{ti['Market Cap']}</td>
                        <td className="p-1 md:block hidden">{ti['P/E']}</td>
                        <td className="p-1">{ti.Price}</td>
                        <td className="p-1 md:block hidden">{ti.Change}</td>
                        <td className="p-1">{ti.Volume}</td>
                        <td className="p-1">{ti.Float}</td>
                        <td className="p-1 md:block hidden">{ti['Float Short']}</td>
                        <td className="p-1">{ti['Short Ratio']}</td>
                        <td className="p-1 md:block hidden">{ti['Avg Volume']}</td>
                        <td className="p-1 md:block hidden">{ti['from Open']}</td>
                        <td className="p-1">{ti.Gap}</td>
                        <td className="p-1">{ti['Rel Volume']}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
    )
}

export default OversoldReversals