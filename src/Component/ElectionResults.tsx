import { useEffect, useState } from "react";
export const ElectionResults = () => {
  const [isloading, setIsLoading] = useState(false)
  const [electionResult, setElectionResult] = useState<any>([]);
  console.log(electionResult)
  console.log(isloading)
  const token = localStorage.getItem("token");
  const [election, setElection] = useState<any>([]);
  useEffect(() => {
    const handleEletions = async () => {

      try {
        const res = await fetch(`https://foursquarevgc-election-api.onrender.com/elections`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
          }
        })
        const result = await res.json();
        setElection(result);
      } catch (error) {
        console.log(error)
      }

    }
    handleEletions();
  },)
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("GroupAId");
    localStorage.removeItem("GroupBId");
    localStorage.removeItem("GroupCId");
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  const electionId = election[0]?._id
  console.log(electionId)
  useEffect(() => {
    const handleEletion = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`https://foursquarevgc-election-api.onrender.com/election-records/results/${electionId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
          },
        });
        const result = await res.json();
        setElectionResult(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      finally {
        setIsLoading(false)
      }

    };
    handleEletion();
  }, [electionId]);

  // const electionData = {
  //   categoryOne: [
  //     { name: "Candidate One", votes: "N/A" },
  //     { name: "Candidate Two", votes: "N/A" },
  //     { name: "Candidate Three", votes: "N/A" },
  //   ],
  //   categoryTwo: [
  //     { name: "Candidate One", votes: "N/A" },
  //     { name: "Candidate Two", votes: "N/A" },
  //     { name: "Candidate Three", votes: "N/A" },
  //   ],
  //   categoryThree: [
  //     { name: "Candidate One", votes: "N/A" },
  //     { name: "Candidate Two", votes: "N/A" },
  //     { name: "Candidate Three", votes: "N/A" },
  //   ],
  // };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col mx-auto justify-center items-center h-[95%] w-[90%] xl:w-[60%] text-center">
        <h2 className="xl:text-2xl md:text-[4vw]  text:xl font-bold text-gray-800 mb-6">
          Election Results
        </h2>

        {/* Category One */}
        <div className="w-full  mb-3">
          {
            isloading ? (
              <span>Loading results..</span>
            ) : (
              <div>
                <h3 className=" font-semibold text-white xl:text-[1vw]   bg-blue-600 py-1 rounded-t-md">
                  Category One Results
                </h3>
                <table className="w-full border border-gray-200">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="py-1 px-4 xl:text-[1vw] text-[3vw] border-b">Candidate Name</th>
                      <th className="py-1 px-4 xl:text-[1vw] text-[3vw] border-b">Number of Votes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {electionResult[0]?.candidates.map((candidate: any, index: any) => (
                      <tr
                        key={index}
                        className="text-gray-700 hover:bg-blue-50 transition-colors"
                      >
                        <td className="py-1 px-4 border-b text-[2.7vw] xl:text-[1vw]">
                          {
                            !isloading ? (
                              candidate.name
                            ) : (<span>fetching result...</span>)
                          }
                        </td>
                        <td className="py-1 px-4 border-b text-[3vw] xl:text-[1vw]">
                          {
                            !isloading ? (
                              candidate.votes
                            ) : (<span>fetching result...</span>)
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }
        </div>

        {/* Divider Line */}
        <hr className="w-full border-gray-300 mb-6" />

        {/* Category Two */}
        <div className="w-full  mb-3">
          {
            isloading ? (
              <span>Loading results..</span>
            ) : (
              <div>
                <h3 className=" font-semibold text-white xl:text-[1vw]   bg-green-600 py-1 rounded-t-md">
                  Category Two Results
                </h3>
                <table className="w-full border border-gray-200">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="py-1 px-4 xl:text-[1vw] text-[3vw] border-b">Candidate Name</th>
                      <th className="py-1 px-4 xl:text-[1vw] text-[3vw] border-b">Number of Votes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {electionResult[1]?.candidates.map((candidate: any, index: any) => (
                      <tr
                        key={index}
                        className="text-gray-700 hover:bg-green-50 transition-colors"
                      >
                        <td className="py-1 px-4 border-b text-[2.7vw] xl:text-[1vw]">
                          {
                            !isloading ? (
                              candidate.name
                            ) : (<span>fetching result...</span>)
                          }
                        </td>
                        <td className="py-1 px-4 border-b text-[3vw] xl:text-[1vw]">
                          {
                            !isloading ? (
                              candidate.votes
                            ) : (<span>fetching result...</span>)
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }
        </div>


        {/* Divider Line */}
        <hr className="w-full border-gray-300 mb-6" />

        {/* Category Three */}
        <div className="w-full  mb-3">
          {
            isloading ? (
              <span>Loading results..</span>
            ) : (
              <div>
                <h3 className=" font-semibold text-white xl:text-[1vw]   bg-red-600 py-1 rounded-t-md">
                  Category Three Results
                </h3>
                <table className="w-full border border-gray-200">
                  <thead>
                    <tr className="bg-red-100">
                      <th className="py-1 px-4 xl:text-[1vw] text-[3vw] border-b">Candidate Name</th>
                      <th className="py-1 px-4 xl:text-[1vw] text-[3vw] border-b">Number of Votes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {electionResult[2]?.candidates.map((candidate: any, index: any) => (
                      <tr
                        key={index}
                        className="text-gray-700 hover:bg-red-50 transition-colors"
                      >
                        <td className="py-1 px-4 border-b text-[2.7vw] xl:text-[1vw]">
                          {
                            !isloading ? (
                              candidate.name
                            ) : (<span>fetching result...</span>)
                          }
                        </td>
                        <td className="py-1 px-4 border-b text-[3vw] xl:text-[1vw]">
                          {
                            !isloading ? (
                              candidate.votes
                            ) : (<span>fetching result...</span>)
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }
        </div>
        {
          !isloading && (

            <button
              onClick={handleLogout}
              className="bg-gray-800  text-white xl:px-6 px-20 xl:py-2 py-5 md:text-xl rounded hover:bg-gray-700 transition-colors"
            >
              Log Out
            </button>
          )
        }
      </div>
    </div>
  );
};
