<script>
    export let data;
  </script>
  
  <h2>Energy Data</h2>
  
  <ul>
    <li>Current: {data.current.value}</li>
    <li>kWh Exported: {data.kwhexport.value}</li>
    <li>kWh Imported: {data.kwhimport.value}</li>
    <li>Power: {data.power.value}</li>
    <li>Voltage: {data.voltage.value}</li>
    <li>Socket ID: {data.socketid.value}</li>
  </ul>