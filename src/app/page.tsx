import Header from '@/components/Header';
import Artboard from '@/components/Artboard';
import SidePanel from '@/components/SidePanel';
import PropsEditor from '@/components/PropsEditor';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex w-full flex-1 items-stretch">
        <SidePanel />
        <Artboard />
        <PropsEditor />
      </div>
    </main>
  );
}
