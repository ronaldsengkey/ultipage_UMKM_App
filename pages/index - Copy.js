import React from 'react';
import { useState } from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { Logs } from 'services/axios.service';

const Index = ({ logsData }) => {
  const [logs, setLogs] = useState(logsData);

  const handleClick = async () => {
    const results = await fetch('api/logs')
    const resultsData = await results.json()
    console.log('res', resultsData);
  }

  return (
    <div>
      <p onClick={() => handleClick()}>tes</p>
      {logs.length > 0 && (logs.map((log, i) => (
        <p key={i}>{log.status}</p>
      )))}
    </div>
  )
}

Index.getInitialProps = async () => {
  const results = await Logs()
  return { logsData: results }
}

export default Index
