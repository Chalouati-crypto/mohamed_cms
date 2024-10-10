import { createClient } from "@supabase/supabase-js";
/*
this file is used to initialise the supabase API and create a client to which we can start querying our database
*/
export const supabaseUrl = "https://eegmzcjeusxpgmcnywsh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZ216Y2pldXN4cGdtY255d3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzODQ2MjYsImV4cCI6MjA0Mzk2MDYyNn0.WlUeJe4Z-KjLtQHq--XAAgTkBLrfpPCyFWRhasCJPos";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
