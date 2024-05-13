import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useWriteRspContractInitRoom } from "./generated";
import { sepolia } from "wagmi/chains";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const {
    data: writeInitRoomData,
    writeContract: writeInitGame,
    error: errorWrite,
  } = useWriteRspContractInitRoom();

  console.log("errorWrite", errorWrite);

  const test = () => {
    writeInitGame({
      chainId: sepolia.id,
      args: [
        0n,
        "0x0000000000000000000000000000000000000000",
        0n,
        "0x0000000000000000000000000000000000000000",
        "0x0000000000000000000000000000000000000000",
      ],
      functionName: "initRoom",
    });
  };

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <button onClick={test} type="button">
        Test generated hook
      </button>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  );
}

export default App;
