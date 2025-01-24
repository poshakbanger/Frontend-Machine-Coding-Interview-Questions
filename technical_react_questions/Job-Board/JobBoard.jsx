import React, { useEffect, useState } from 'react'

const JobBoard = () => {

    const [jobs, setJobs] = useState([]);
    const [visibleJobs, setVisibleJobs] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const jobsPerPage = 6;

    useEffect(() => {
        const fetchJobIds = async () => {
            try {
                const response = await fetch(
                    "https://hacker-news.firebaseio.com/v0/jobstories.json"
                );
                const jobIds = await response.json();
                fetchJobDetails(jobIds);
            } catch (error) {
                console.error("Error fetching job IDs:", error);
            }
        };
        fetchJobIds();
    },[]);

    const fetchJobDetails = async (jobIds) => {
        setLoading(true);

        try {
            const startIndex = page * jobsPerPage;
            const endIndex = startIndex + jobsPerPage;
            const currentBatch = jobIds.slice(startIndex, endIndex);

            const jobPromises = await Promise.all(jobPromises);
        } catch (error) {
            console.error("Error fetching job details:", error);
        } finally {
            setLoading(false);
        }
    };

    const loadMoreJobs = () => {
        setPage((prevPage) => (prevPage + 1));
    };

    useEffect(() => {
        if (page > 0) {
            fetchJobIds()
        }
    },[page]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Job Board</h1>
        <div>
            {visibleJobs.map((job) => (
                <div 
                  key={job.id}
                  style={{
                    border: "1px solid #ddd",
                    marginBottom: "10px",
                    padding: "10px",
                    borderRadius: "4px",
                  }}>
                    <h2></h2>
                  </div>
            ))}

        </div>
    </div>
  )
}

export default JobBoard