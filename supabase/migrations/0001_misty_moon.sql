/*
  # Initial Schema Setup

  1. Tables
    - users (managed by Supabase Auth)
    - recycling_history
      - id (uuid, primary key)
      - user_id (references auth.users)
      - weight_kg (numeric)
      - material_type (text)
      - collection_date (timestamptz)
      - points_earned (integer)
    - points_transactions
      - id (uuid, primary key)
      - user_id (references auth.users)
      - amount (integer)
      - transaction_type (text)
      - description (text)
      - created_at (timestamptz)
    - collection_schedules
      - id (uuid, primary key)
      - user_id (references auth.users)
      - scheduled_date (timestamptz)
      - status (text)
      - address (text)
      - notes (text)
    - rewards_redemptions
      - id (uuid, primary key)
      - user_id (references auth.users)
      - reward_id (text)
      - points_spent (integer)
      - redeemed_at (timestamptz)
      - status (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Recycling History
CREATE TABLE recycling_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  weight_kg numeric NOT NULL,
  material_type text NOT NULL,
  collection_date timestamptz DEFAULT now(),
  points_earned integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE recycling_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own recycling history"
  ON recycling_history
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Points Transactions
CREATE TABLE points_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  amount integer NOT NULL,
  transaction_type text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE points_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own points transactions"
  ON points_transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Collection Schedules
CREATE TABLE collection_schedules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  scheduled_date timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  address text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE collection_schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own collection schedules"
  ON collection_schedules
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Rewards Redemptions
CREATE TABLE rewards_redemptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  reward_id text NOT NULL,
  points_spent integer NOT NULL,
  redeemed_at timestamptz DEFAULT now(),
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rewards_redemptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own rewards redemptions"
  ON rewards_redemptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);