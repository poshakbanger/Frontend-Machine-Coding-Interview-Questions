import React, { useEffect, useState } from "react";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]); // Stores all fetched jobs
  const [visibleJobs, setVisibleJobs] = useState([]); // Jobs currently displayed
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const jobsPerPage = 6;

  useEffect(() => {
    fetchJobIds();
  }, []);

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

  const fetchJobDetails = async (jobIds) => {
    setLoading(true);
    try {
      const startIndex = page * jobsPerPage;
      const endIndex = startIndex + jobsPerPage;
      const currentBatch = jobIds.slice(startIndex, endIndex);

      const jobPromises = currentBatch.map(async (id) => {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return response.json();
      });

      const newJobs = await Promise.all(jobPromises);
      setJobs((prevJobs) => [...prevJobs, ...newJobs]);
      setVisibleJobs((prevVisibleJobs) => [...prevVisibleJobs, ...newJobs]);
    } catch (error) {
      console.error("Error fetching job details:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreJobs = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page > 0) {
      fetchJobIds();
    }
  }, [page]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Job Board</h1>
      <div>
        {visibleJobs.length > 0 ? (
          visibleJobs.map((job) => (
            <div
              key={job.id}
              style={{
                border: "1px solid #ddd",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <h2>{job.title}</h2>
              <p>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  View Job
                </a>
              </p>
            </div>
          ))
        ) : (
          <p>Loading jobs...</p>
        )}
      </div>
      <button onClick={loadMoreJobs} disabled={loading} style={{ marginTop: "10px", padding: "10px", cursor: "pointer" }}>
        {loading ? "Loading..." : "Load More Jobs"}
      </button>
    </div>
  );
};

export default JobBoard;