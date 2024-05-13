import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RSPContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const rspContractAbi = [
  { type: 'error', inputs: [], name: 'AlreadyRevealed' },
  { type: 'error', inputs: [], name: 'BothEntrantInTheRoom' },
  { type: 'error', inputs: [], name: 'EarlyCall' },
  { type: 'error', inputs: [], name: 'InvalidBetAmount' },
  {
    type: 'error',
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'InvalidData',
  },
  { type: 'error', inputs: [], name: 'InvalidFeeValue' },
  { type: 'error', inputs: [], name: 'InvalidMove' },
  { type: 'error', inputs: [], name: 'InvalidPlayer' },
  { type: 'error', inputs: [], name: 'InvalidStageForJoinGame' },
  { type: 'error', inputs: [], name: 'InvalidStageForReveal' },
  { type: 'error', inputs: [], name: 'InvalidTimeDuration' },
  { type: 'error', inputs: [], name: 'LowBetAmount' },
  { type: 'error', inputs: [], name: 'LowValue' },
  { type: 'error', inputs: [], name: 'NonActiveGame' },
  { type: 'error', inputs: [], name: 'NonexistentRoom' },
  { type: 'error', inputs: [], name: 'OnlyInvited' },
  { type: 'error', inputs: [], name: 'OnlyRoomCreator' },
  { type: 'error', inputs: [], name: 'ReachedCloseRoomDeadline' },
  { type: 'error', inputs: [], name: 'SelfPlayProhibited' },
  { type: 'error', inputs: [], name: 'UnknownCaller' },
  { type: 'error', inputs: [], name: 'WrongRoomStatus' },
  { type: 'error', inputs: [], name: 'YearlyCallForCloseRoom' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'BaseReferrerSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'commissionaire',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'CommissionaireSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'gameId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'stage',
        internalType: 'enum Game.Stages',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'DrawOnRoomGame',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'entrant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'EntrantExit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'feePercentage',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'FeePercentageSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'playerA',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'GameCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'entrantA',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'entrantB',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'JoinInvited',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minBetAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'MinimalBetAmountSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'gameId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'entrant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MoveAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnerCloseUnusedRoom',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'player',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PlayerConnectedToGame',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'gameId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'entrant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PlayerRevealedMove',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'surrender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PlayerSurrendered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'entrantA',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'entrantB',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PrivateRoomInitialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'feeValue',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'ReferrerFeeSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'referralAddr',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'referrerAddr',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ReferrerProcessed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'deadlineToCloseRoom',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
    ],
    name: 'RoomCloseDeadlineSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiverAddr',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'pot', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'RoomClosed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'entrantA',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'entrantB',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'currency',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'betAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RoomCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'gameId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'opponent',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'RoomGameStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'entrant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoomJoined',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'closer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'UnusedRoomClosed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roomId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'winsEntrantA',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'winsEntrantB',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'entrantA',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'entrantB',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'WinsCounterUpdated',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_WINS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ONE_HUNDRED_PERCENT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SHOULD_SPLIT_WIN_POT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'activeRoomCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'allRoomGames',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseReferrer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'closeRoomDeadline',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomId', internalType: 'uint256', type: 'uint256' }],
    name: 'closeUnusedRoom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'closers',
    outputs: [
      { name: 'closer', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'commissionaire',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'commonGameData',
    outputs: [
      { name: 'gameId', internalType: 'uint256', type: 'uint256' },
      { name: 'stage', internalType: 'enum Game.Stages', type: 'uint8' },
      {
        name: 'winner',
        internalType: 'enum Game.WinnerOutcomes',
        type: 'uint8',
      },
      { name: 'active', internalType: 'bool', type: 'bool' },
      { name: 'revealCount', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomId', internalType: 'uint256', type: 'uint256' }],
    name: 'exitRoom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'fee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gameIdCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'enum Game.Players', type: 'uint8' },
    ],
    name: 'gamePlayers',
    outputs: [
      { name: 'playerAddress', internalType: 'address', type: 'address' },
      { name: 'move', internalType: 'enum Game.Moves', type: 'uint8' },
      { name: 'encrMove', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getActiveGamesIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomId', internalType: 'uint256', type: 'uint256' }],
    name: 'getAllRoomGames',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomId', internalType: 'uint256', type: 'uint256' }],
    name: 'getCurrentRoomGameInfo',
    outputs: [
      {
        name: 'data',
        internalType: 'struct Game.GameData',
        type: 'tuple',
        components: [
          { name: 'gameId', internalType: 'uint256', type: 'uint256' },
          { name: 'stage', internalType: 'enum Game.Stages', type: 'uint8' },
          {
            name: 'winner',
            internalType: 'enum Game.WinnerOutcomes',
            type: 'uint8',
          },
          { name: 'active', internalType: 'bool', type: 'bool' },
          { name: 'revealCount', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'gameId', internalType: 'uint256', type: 'uint256' }],
    name: 'getGameData',
    outputs: [
      {
        name: '',
        internalType: 'struct Game.GameData',
        type: 'tuple',
        components: [
          { name: 'gameId', internalType: 'uint256', type: 'uint256' },
          { name: 'stage', internalType: 'enum Game.Stages', type: 'uint8' },
          {
            name: 'winner',
            internalType: 'enum Game.WinnerOutcomes',
            type: 'uint8',
          },
          { name: 'active', internalType: 'bool', type: 'bool' },
          { name: 'revealCount', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'gameId', internalType: 'uint256', type: 'uint256' }],
    name: 'getGamePlayersAddress',
    outputs: [
      { name: 'playerA', internalType: 'address', type: 'address' },
      { name: 'playerB', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'gameId', internalType: 'uint256', type: 'uint256' }],
    name: 'getGamePlayersEncrMoves',
    outputs: [
      { name: 'encrMoveA', internalType: 'bytes32', type: 'bytes32' },
      { name: 'encrMoveB', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'gameId', internalType: 'uint256', type: 'uint256' }],
    name: 'getGamePlayersMoves',
    outputs: [
      { name: 'moveA', internalType: 'enum Game.Moves', type: 'uint8' },
      { name: 'moveB', internalType: 'enum Game.Moves', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'gameId', internalType: 'uint256', type: 'uint256' }],
    name: 'getGameStage',
    outputs: [
      { name: 'stage', internalType: 'enum Game.Stages', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getGamesData',
    outputs: [
      {
        name: '',
        internalType: 'struct Game.GameData[]',
        type: 'tuple[]',
        components: [
          { name: 'gameId', internalType: 'uint256', type: 'uint256' },
          { name: 'stage', internalType: 'enum Game.Stages', type: 'uint8' },
          {
            name: 'winner',
            internalType: 'enum Game.WinnerOutcomes',
            type: 'uint8',
          },
          { name: 'active', internalType: 'bool', type: 'bool' },
          { name: 'revealCount', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomId', internalType: 'uint256', type: 'uint256' }],
    name: 'getLastRoomGameId',
    outputs: [{ name: 'res', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'gameId', internalType: 'uint256', type: 'uint256' }],
    name: 'getPlayers',
    outputs: [
      {
        name: 'playerA',
        internalType: 'struct Game.Player',
        type: 'tuple',
        components: [
          { name: 'playerAddress', internalType: 'address', type: 'address' },
          { name: 'move', internalType: 'enum Game.Moves', type: 'uint8' },
          { name: 'encrMove', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
      {
        name: 'playerB',
        internalType: 'struct Game.Player',
        type: 'tuple',
        components: [
          { name: 'playerAddress', internalType: 'address', type: 'address' },
          { name: 'move', internalType: 'enum Game.Moves', type: 'uint8' },
          { name: 'encrMove', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomId', internalType: 'uint256', type: 'uint256' }],
    name: 'getRoomBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomId', internalType: 'uint256', type: 'uint256' }],
    name: 'getRoomEntrantsAddresses',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomId', internalType: 'uint256', type: 'uint256' }],
    name: 'getRoomWinnerStatus',
    outputs: [
      { name: '', internalType: 'enum Rsp.WinnerStatus', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'indexFrom', internalType: 'uint256', type: 'uint256' },
      { name: 'indexTo', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoomsInfo',
    outputs: [
      {
        name: '',
        internalType: 'struct Rsp.RoomInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'roomId', internalType: 'uint256', type: 'uint256' },
          { name: 'wins', internalType: 'uint256', type: 'uint256' },
          {
            name: 'entrants',
            internalType: 'struct Rsp.Entrants',
            type: 'tuple',
            components: [
              { name: 'entrantA', internalType: 'address', type: 'address' },
              {
                name: 'winsEntrantA',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'entrantB', internalType: 'address', type: 'address' },
              {
                name: 'winsEntrantB',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'bet', internalType: 'uint256', type: 'uint256' },
          { name: 'roomBalance', internalType: 'uint256', type: 'uint256' },
          {
            name: 'status',
            internalType: 'enum Rsp.RoomStatus',
            type: 'uint8',
          },
          {
            name: 'winnerStatus',
            internalType: 'enum Rsp.WinnerStatus',
            type: 'uint8',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'gameId', internalType: 'uint256', type: 'uint256' }],
    name: 'getWhoWon',
    outputs: [
      {
        name: 'winner',
        internalType: 'enum Game.WinnerOutcomes',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'gameId', internalType: 'uint256', type: 'uint256' }],
    name: 'getWinnerAddress',
    outputs: [
      { name: 'winnerAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'wins', internalType: 'uint8', type: 'uint8' },
      { name: 'currency', internalType: 'address', type: 'address' },
      { name: 'betAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'entrantB', internalType: 'address', type: 'address' },
      { name: 'referrer', internalType: 'address', type: 'address' },
    ],
    name: 'initRoom',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'closeRoomDeadline_', internalType: 'uint64', type: 'uint64' },
      { name: 'fee_', internalType: 'uint256', type: 'uint256' },
      { name: 'minBetAmount_', internalType: 'uint256', type: 'uint256' },
      { name: 'commissionaire_', internalType: 'address', type: 'address' },
      { name: 'referrerFee_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'gameId', internalType: 'uint256', type: 'uint256' }],
    name: 'isGameActive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'roomId', internalType: 'uint256', type: 'uint256' },
      { name: 'referrer', internalType: 'address', type: 'address' },
    ],
    name: 'joinRoom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minBetAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomIds', internalType: 'uint256[]', type: 'uint256[]' }],
    name: 'ownerCloseRooms',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'roomId', internalType: 'uint256', type: 'uint256' },
      { name: 'hiddenMove', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'playRoomGame',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'referrerFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'referrers',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'roomId', internalType: 'uint256', type: 'uint256' },
      { name: 'move', internalType: 'enum Game.Moves', type: 'uint8' },
      { name: 'salt', internalType: 'string', type: 'string' },
    ],
    name: 'reveal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'roomIdCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'rooms',
    outputs: [
      { name: 'roomId', internalType: 'uint256', type: 'uint256' },
      { name: 'wins', internalType: 'uint256', type: 'uint256' },
      {
        name: 'entrants',
        internalType: 'struct Rsp.Entrants',
        type: 'tuple',
        components: [
          { name: 'entrantA', internalType: 'address', type: 'address' },
          { name: 'winsEntrantA', internalType: 'uint256', type: 'uint256' },
          { name: 'entrantB', internalType: 'address', type: 'address' },
          { name: 'winsEntrantB', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'currency', internalType: 'address', type: 'address' },
      { name: 'bet', internalType: 'uint256', type: 'uint256' },
      { name: 'roomBalance', internalType: 'uint256', type: 'uint256' },
      { name: 'status', internalType: 'enum Rsp.RoomStatus', type: 'uint8' },
      {
        name: 'winnerStatus',
        internalType: 'enum Rsp.WinnerStatus',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'baseReferrer_', internalType: 'address', type: 'address' },
    ],
    name: 'setBaseReferrer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_commissionaire', internalType: 'address', type: 'address' },
    ],
    name: 'setCommissionaire',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'fee_', internalType: 'uint256', type: 'uint256' }],
    name: 'setFeePercentage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'minBetAmount_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMinimalBetAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'referrerFee_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setReferrerFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'closeRoomDeadline_', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setRoomCloseDeadline',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'roomId', internalType: 'uint256', type: 'uint256' }],
    name: 'surrender',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const;

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const rspContractAddress = {
  42161: '0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9',
  80001: '0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9',
  11155111: '0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9',
} as const;

/**
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const rspContractConfig = {
  address: rspContractAddress,
  abi: rspContractAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContract = /*#__PURE__*/ createUseReadContract({
  abi: rspContractAbi,
  address: rspContractAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"MIN_WINS"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractMinWins = /*#__PURE__*/ createUseReadContract({
  abi: rspContractAbi,
  address: rspContractAddress,
  functionName: 'MIN_WINS',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"ONE_HUNDRED_PERCENT"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractOneHundredPercent =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'ONE_HUNDRED_PERCENT',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"SHOULD_SPLIT_WIN_POT"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractShouldSplitWinPot =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'SHOULD_SPLIT_WIN_POT',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"activeRoomCounter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractActiveRoomCounter =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'activeRoomCounter',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"allRoomGames"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractAllRoomGames =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'allRoomGames',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"baseReferrer"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractBaseReferrer =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'baseReferrer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"closeRoomDeadline"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractCloseRoomDeadline =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'closeRoomDeadline',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"closers"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractClosers = /*#__PURE__*/ createUseReadContract({
  abi: rspContractAbi,
  address: rspContractAddress,
  functionName: 'closers',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"commissionaire"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractCommissionaire =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'commissionaire',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"commonGameData"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractCommonGameData =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'commonGameData',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"fee"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractFee = /*#__PURE__*/ createUseReadContract({
  abi: rspContractAbi,
  address: rspContractAddress,
  functionName: 'fee',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"gameIdCounter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGameIdCounter =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'gameIdCounter',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"gamePlayers"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGamePlayers =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'gamePlayers',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getActiveGamesIds"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetActiveGamesIds =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getActiveGamesIds',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getAllRoomGames"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetAllRoomGames =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getAllRoomGames',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getCurrentRoomGameInfo"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetCurrentRoomGameInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getCurrentRoomGameInfo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getGameData"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetGameData =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getGameData',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getGamePlayersAddress"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetGamePlayersAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getGamePlayersAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getGamePlayersEncrMoves"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetGamePlayersEncrMoves =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getGamePlayersEncrMoves',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getGamePlayersMoves"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetGamePlayersMoves =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getGamePlayersMoves',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getGameStage"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetGameStage =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getGameStage',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getGamesData"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetGamesData =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getGamesData',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getLastRoomGameId"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetLastRoomGameId =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getLastRoomGameId',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getPlayers"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetPlayers = /*#__PURE__*/ createUseReadContract(
  {
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getPlayers',
  }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getRoomBalance"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetRoomBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getRoomBalance',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getRoomEntrantsAddresses"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetRoomEntrantsAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getRoomEntrantsAddresses',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getRoomWinnerStatus"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetRoomWinnerStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getRoomWinnerStatus',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getRoomsInfo"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetRoomsInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getRoomsInfo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getWhoWon"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetWhoWon = /*#__PURE__*/ createUseReadContract({
  abi: rspContractAbi,
  address: rspContractAddress,
  functionName: 'getWhoWon',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"getWinnerAddress"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractGetWinnerAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'getWinnerAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"isGameActive"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractIsGameActive =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'isGameActive',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"minBetAmount"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractMinBetAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'minBetAmount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractOwner = /*#__PURE__*/ createUseReadContract({
  abi: rspContractAbi,
  address: rspContractAddress,
  functionName: 'owner',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"referrerFee"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractReferrerFee =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'referrerFee',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"referrers"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractReferrers = /*#__PURE__*/ createUseReadContract({
  abi: rspContractAbi,
  address: rspContractAddress,
  functionName: 'referrers',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"roomIdCounter"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractRoomIdCounter =
  /*#__PURE__*/ createUseReadContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'roomIdCounter',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"rooms"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useReadRspContractRooms = /*#__PURE__*/ createUseReadContract({
  abi: rspContractAbi,
  address: rspContractAddress,
  functionName: 'rooms',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContract = /*#__PURE__*/ createUseWriteContract({
  abi: rspContractAbi,
  address: rspContractAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"closeUnusedRoom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractCloseUnusedRoom =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'closeUnusedRoom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"exitRoom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractExitRoom = /*#__PURE__*/ createUseWriteContract(
  {
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'exitRoom',
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"initRoom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractInitRoom = /*#__PURE__*/ createUseWriteContract(
  {
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'initRoom',
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"joinRoom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractJoinRoom = /*#__PURE__*/ createUseWriteContract(
  {
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'joinRoom',
  }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"ownerCloseRooms"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractOwnerCloseRooms =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'ownerCloseRooms',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"playRoomGame"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractPlayRoomGame =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'playRoomGame',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"reveal"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractReveal = /*#__PURE__*/ createUseWriteContract({
  abi: rspContractAbi,
  address: rspContractAddress,
  functionName: 'reveal',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setBaseReferrer"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractSetBaseReferrer =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setBaseReferrer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setCommissionaire"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractSetCommissionaire =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setCommissionaire',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setFeePercentage"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractSetFeePercentage =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setFeePercentage',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setMinimalBetAmount"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractSetMinimalBetAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setMinimalBetAmount',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setReferrerFee"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractSetReferrerFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setReferrerFee',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setRoomCloseDeadline"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractSetRoomCloseDeadline =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setRoomCloseDeadline',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"surrender"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractSurrender =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'surrender',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWriteRspContractTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContract = /*#__PURE__*/ createUseSimulateContract({
  abi: rspContractAbi,
  address: rspContractAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"closeUnusedRoom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractCloseUnusedRoom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'closeUnusedRoom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"exitRoom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractExitRoom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'exitRoom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"initRoom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractInitRoom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'initRoom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"joinRoom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractJoinRoom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'joinRoom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"ownerCloseRooms"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractOwnerCloseRooms =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'ownerCloseRooms',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"playRoomGame"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractPlayRoomGame =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'playRoomGame',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"reveal"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractReveal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'reveal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setBaseReferrer"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractSetBaseReferrer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setBaseReferrer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setCommissionaire"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractSetCommissionaire =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setCommissionaire',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setFeePercentage"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractSetFeePercentage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setFeePercentage',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setMinimalBetAmount"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractSetMinimalBetAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setMinimalBetAmount',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setReferrerFee"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractSetReferrerFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setReferrerFee',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"setRoomCloseDeadline"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractSetRoomCloseDeadline =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'setRoomCloseDeadline',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"surrender"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractSurrender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'surrender',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rspContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useSimulateRspContractTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rspContractAbi,
    address: rspContractAddress,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"BaseReferrerSet"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractBaseReferrerSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'BaseReferrerSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"CommissionaireSet"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractCommissionaireSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'CommissionaireSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"DrawOnRoomGame"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractDrawOnRoomGameEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'DrawOnRoomGame',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"EntrantExit"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractEntrantExitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'EntrantExit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"FeePercentageSet"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractFeePercentageSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'FeePercentageSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"GameCreated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractGameCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'GameCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"JoinInvited"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractJoinInvitedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'JoinInvited',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"MinimalBetAmountSet"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractMinimalBetAmountSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'MinimalBetAmountSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"MoveAdded"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractMoveAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'MoveAdded',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"OwnerCloseUnusedRoom"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractOwnerCloseUnusedRoomEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'OwnerCloseUnusedRoom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'OwnershipTransferred',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"PlayerConnectedToGame"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractPlayerConnectedToGameEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'PlayerConnectedToGame',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"PlayerRevealedMove"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractPlayerRevealedMoveEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'PlayerRevealedMove',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"PlayerSurrendered"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractPlayerSurrenderedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'PlayerSurrendered',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"PrivateRoomInitialized"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractPrivateRoomInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'PrivateRoomInitialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"ReferrerFeeSet"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractReferrerFeeSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'ReferrerFeeSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"ReferrerProcessed"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractReferrerProcessedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'ReferrerProcessed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"RoomCloseDeadlineSet"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractRoomCloseDeadlineSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'RoomCloseDeadlineSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"RoomClosed"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractRoomClosedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'RoomClosed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"RoomCreated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractRoomCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'RoomCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"RoomGameStarted"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractRoomGameStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'RoomGameStarted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"RoomJoined"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractRoomJoinedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'RoomJoined',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"UnusedRoomClosed"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractUnusedRoomClosedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'UnusedRoomClosed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rspContractAbi}__ and `eventName` set to `"WinsCounterUpdated"`
 *
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0D1C6607ffDB1aA6Ef27e41084F91Bdd450482e9)
 */
export const useWatchRspContractWinsCounterUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rspContractAbi,
    address: rspContractAddress,
    eventName: 'WinsCounterUpdated',
  });
