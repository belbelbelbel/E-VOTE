export const ElectionResults = (results : any) => {

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("GroupAId");
    localStorage.removeItem("GroupBId");
    localStorage.removeItem("GroupCId");
    localStorage.removeItem("token")
    window.location.href = "/";
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col mx-auto justify-center items-center h-auto w-[90%] xl:w-[60%] text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Election Results
        </h2>

        {/* Category One */}
        <div className="w-full mb-6">
          <h3 className="text-xl font-semibold text-white bg-blue-600 py-2 rounded-t-md">
            Category One Results
          </h3>
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-4 border-b">Candidate Name</th>
                <th className="py-2 px-4 border-b">Number of Votes</th>
              </tr>
            </thead>
            <tbody>
              {results.categoryOne?.map((candidate:any, index:any) => (
                <tr
                  key={index}
                  className="text-gray-700 hover:bg-blue-50 transition-colors"
                >
                  <td className="py-2 px-4 border-b">{candidate.name}</td>
                  <td className="py-2 px-4 border-b">{candidate.votes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Divider Line */}
        <hr className="w-full border-gray-300 mb-6" />

        {/* Category Two */}
        <div className="w-full mb-6">
          <h3 className="text-xl font-semibold text-white bg-green-600 py-2 rounded-t-md">
            Category Two Results
          </h3>
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-green-100">
                <th className="py-2 px-4 border-b">Candidate Name</th>
                <th className="py-2 px-4 border-b">Number of Votes</th>
              </tr>
            </thead>
            <tbody>
              {results.categoryTwo?.map((candidate:any, index:any) => (
                <tr
                  key={index}
                  className="text-gray-700 hover:bg-green-50 transition-colors"
                >
                  <td className="py-2 px-4 border-b">{candidate.name}</td>
                  <td className="py-2 px-4 border-b">{candidate.votes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Divider Line */}
        <hr className="w-full border-gray-300 mb-6" />

        {/* Category Three */}
        <div className="w-full mb-6">
          <h3 className="text-xl font-semibold text-white bg-red-600 py-2 rounded-t-md">
            Category Three Results
          </h3>
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-red-100">
                <th className="py-2 px-4 border-b">Candidate Name</th>
                <th className="py-2 px-4 border-b">Number of Votes</th>
              </tr>
            </thead>
            <tbody>
              {results.categoryThree?.map((candidate:any, index:any) => (
                <tr
                  key={index}
                  className="text-gray-700 hover:bg-red-50 transition-colors"
                >
                  <td className="py-2 px-4 border-b">{candidate.name}</td>
                  <td className="py-2 px-4 border-b">{candidate.votes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={handleLogout}
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};