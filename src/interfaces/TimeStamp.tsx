export interface TimeStruct {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface DateStruct {
  day: number;
  month: number;
  year: number;

  dayOfWeek: number;
  dayOfYear: number;
}

export interface TimeStamp {
  time: TimeStruct;
  date: DateStruct;
}
