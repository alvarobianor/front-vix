import { Dashboard } from "src/components/Dashboard";
import { Header } from "src/components/Header";
import { GlobalStyles } from "src/styles/global";

import { useState } from "react";
import { NewTransactionModal } from "src/components/NewTransactionModal";
import { Transactionprovider } from "src/hooks/useTransaction";

function Home() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Transactionprovider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      {/* -------------------------------- */}

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </Transactionprovider>
  );
}

export default Home;
