declare global {
  enum Stage {
    START,
    TEAM,
    PLAYERS,
    SUMMARY,
    SENT,
  }

  class StageManager {
    private stage: Stage;

    constructor(stage?: Stage) {
      this.stage = stage ? stage : Stage.START;
    }

    previous() {
      this.stage > 0 ? this.stage-- : this.stage;
    }

    next() {
      this.stage < Object.keys(Stage).length ? this.stage++ : this.stage;
    }

    isStart(): boolean {
      return this.stage === Stage.START;
    }

    isTeam(): boolean {
      return this.stage === Stage.TEAM;
    }

    isPlayers(): boolean {
      return this.stage === Stage.PLAYERS;
    }

    isSummary(): boolean {
      return this.stage === Stage.SUMMARY;
    }

    isSent(): boolean {
      return this.stage === Stage.SENT;
    }

    setStart() {
      this.stage = Stage.START;
    }

    setTeam() {
      this.stage = Stage.TEAM;
    }

    setPlayers() {
      this.stage = Stage.PLAYERS;
    }

    setSummary() {
      this.stage = Stage.SUMMARY;
    }

    setSent() {
      this.stage = Stage.SENT;
    }

    get(): Stage {
      return this.stage;
    }
  }

  enum Category {
    OPEN = 1,
    SCHOOL = 2,
  }

  interface PlayerPayload {
    first_name: string;
    last_name: string;
    age?: number;
  }

  interface FormPayload {
    name: string;
    category?: Category;
    email: string;
    phone?: number;
    players: PlayerPayload[];
  }

  interface LoginPayload {
    email: string;
    password: string;
  }

  interface RegisterPayload extends LoginPayload {
    first_name: string;
    last_name: string;
    repeated_password: string;
  }

  interface ResetPayload {
    email: string;
  }

  interface RecoveryPayload {
    password: string;
    repeated_password: string;
  }

  enum VerifyStatus {
    SUCCESS,
    INVALID,
    ERROR,
  }

  interface VerifyPayload {
    token: string;
  }

  enum InviteStatus {
    SUCCESS,
    INVALID,
    ERROR,
    AWAIT,
  }

  interface InvitePayload {
    token: string;
  }
}

export {};
