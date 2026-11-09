import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import GameCard from "@/components/GameCard";
import { games } from "@/lib/games";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "ゲーム" };

export default function GamesPage() {
  return (
    <>
      <PageHeading
        en="GAMES"
        title="ゲーム"
        lead="天遊社がこれまでにつくったゲームです。ほとんどの作品はブラウザですぐに遊べます。気になったものから、ぜひ遊んでみてください。"
      />
      <div className="container">
        <div className={styles.grid}>
          {games.map((game) => (
            <GameCard key={game.slug} game={game} detail />
          ))}
        </div>
      </div>

    </>
  );
}
