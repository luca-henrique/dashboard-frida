import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://jxehaiwqbvhgvgcbdijf.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4ZWhhaXdxYnZoZ3ZnY2JkaWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMTE5NjMsImV4cCI6MjAxMjg4Nzk2M30.loG6hmrdJrB-sKIDJwJ14PjLqGQ6H52rQIbJTGl5QLs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
