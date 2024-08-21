export const ModalSummary = () => {
    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("GroupAId");
        localStorage.removeItem("GroupBId");
        localStorage.removeItem("GroupCId");
        window.location.href = "/";
    }
    console.log()
    return (
        <div className='w-screen  text-white flex justify-center items-center ' >
            <div className="flex justify-center items-center flex-col gap-3">
                <div><img src="/asset/Images/modalsuccessimage.png" alt="suceesIMAGE"  className=""/></div>
                <div className="text-center fonts-mid">
                    <div>Vote successfully saved!</div>
                    <div>Please move to the next category </div>
                </div>
            </div>

            {
                
            }
        </div>
    )
}
