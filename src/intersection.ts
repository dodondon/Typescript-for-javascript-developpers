export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const UntiPitcher: Pitcher1 = {
  throwingSpeed: 154
};

const UntiBatter: Batter1 = {
  battingAverage: 0.3865
};

const OotaniShohei: TwoWayPlayer = {
  throwingSpeed: 154,
  battingAverage: 0.3865
};

type TwoWayPlayer = Pitcher1 & Batter1;
