import SidePanelAsset from './SidePanelAsset';

function SidePanel() {
  return (
    <div className="w-1/4 bg-secondary px-2 py-2">
      <div className="h-full rounded-md bg-primary px-3 py-4">
        <p className="text-sm font-bold text-white">Insert asset</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <SidePanelAsset shape="square" />
          <SidePanelAsset shape="circle" />
          <SidePanelAsset shape="rectangle" />
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
