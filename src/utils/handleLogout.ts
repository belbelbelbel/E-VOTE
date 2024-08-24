  const handleLogout = () => {
    const keysToRemove = [
      "username",
      "GroupAId",
      "GroupBId",
      "GroupCId",
      "token",
    ];

    keysToRemove.forEach((key) => localStorage.removeItem(key));

    window.location.href = "/";
  };

export default handleLogout;
