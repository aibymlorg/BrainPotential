export enum GameState {
  Welcome = 'welcome',
  Playing = 'playing',
  Summary = 'summary',
}

export enum Target {
  Brain = 'brain',
  LLM = 'llm',
}

export interface Challenge {
  id: number;
  text: string;
  target: Target;
  explanation: string;
}
