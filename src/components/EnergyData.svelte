<script>
    export let data;
  </script>
  
  <h2>Energy Data</h2>
  <ul>
    <li>Current: {data.current.value}</li>
    <li>Current Timestamp: {data.current.timestamp}</li>
    <li>kWh Exported: {data.kwhexport.value}</li>
    <li>kWh Exported Timestamp: {data.kwhexport.timestamp}</li>
    <li>kWh Imported: {data.kwhimport.value}</li>
    <li>kWh Imported Timestamp: {data.kwhimport.timestamp}</li>
    <li>Power: {data.power.value}</li>
    <li>Power Timestamp: {data.power.timestamp}</li>
    <li>Voltage: {data.voltage.value}</li>
    <li>Voltage Timestamp: {data.voltage.timestamp}</li>
    <li>Socket ID: {data.socketid.value}</li>
  </ul>