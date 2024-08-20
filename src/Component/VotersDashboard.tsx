import { useEffect, useState } from "react";

export const VotersDashboard = () => {
    const [votes, setVotes] = useState<any>({
        A: "", // No vote by default
        B: "",
        C: ""
      });
      useEffect(() => {
        // This effect runs whenever the `votes` state changes.
        console.log('Votes updated:', votes);
      }, [votes]);
    
      const groupImages:any = {
        A: [
          { id: 1, src: '/path-to-image-A1.jpg' },
          { id: 2, src: '/path-to-image-A2.jpg' },
          { id: 3, src: '/path-to-image-A3.jpg' },
          { id: 4, src: '/path-to-image-A4.jpg' },
          { id: 5, src: '/path-to-image-A5.jpg' }
        ],
        B: [
          { id: 1, src: '/path-to-image-B1.jpg' },
          { id: 2, src: '/path-to-image-B2.jpg' },
          { id: 3, src: '/path-to-image-B3.jpg' },
          { id: 4, src: '/path-to-image-B4.jpg' },
          { id: 5, src: '/path-to-image-B5.jpg' }
        ],
        C: [
          { id: 1, src: '/path-to-image-C1.jpg' },
          { id: 2, src: '/path-to-image-C2.jpg' },
          { id: 3, src: '/path-to-image-C3.jpg' },
          { id: 4, src: '/path-to-image-C4.jpg' },
          { id: 5, src: '/path-to-image-C5.jpg' }
        ]
      };
    
      const handleVote = (group:any, id:any) => {
        setVotes((prevVotes:any) => ({
          ...prevVotes,
          [group]: id // Set the selected vote for the group eg b:1 c:2 a:2
        }));
        console.log(votes);
      };
    
      return (
        <div className="voting-container">
          {Object.keys(groupImages).map((group) => (
            <div key={group} className="group">
              <h3>Group {group}</h3>
              <div className="images">
                {groupImages[group].map((image:any) => (
                  <div key={image.id} className="image-container">
                    <img src={image.src} alt={`Group ${group} Image ${image.id}`} />
                    <button
                      className={`vote-button ${votes[group] === image.id ? 'active' : ''}`}
                      onClick={() => handleVote(group, image.id)}
                    >
                      {votes[group] === image.id ? 'Voted' : 'Vote'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
}
