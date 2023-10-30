<script>
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import Monaco from '$lib/Workspace/monaco/Monaco.svelte';
	import Game from './game/Game.svelte'
	import Docs from './docs/Docs.svelte'
	import Output from './output/Output.svelte';
</script>

<div style='height: 100vh'>
	<Splitpanes theme="no-splitter" horizontal style="height: 100%" dblClickSplitter={false}>
    <Pane>
			<Splitpanes theme="modern-theme">
            <Pane size={35}>
					<Splitpanes horizontal theme="modern-theme">
                    <Pane size={15}><Game/></Pane>
						<Pane><Docs/></Pane>
					</Splitpanes>
				</Pane>
				<Pane>
					<Splitpanes horizontal theme="modern-theme">
                    <Pane size={80}><Monaco/></Pane>
						<Pane><Output/></Pane>
					</Splitpanes>
				</Pane>
			</Splitpanes>
		</Pane>
</Splitpanes>
</div>

<style global lang="scss">
	:global(.splitpanes.modern-theme) :global(.splitpanes__pane) {
	  background-color: #1E1E1E;
	}
	:global(.splitpanes.modern-theme) :global(.splitpanes__splitter) {
	  background-color: #ccc;
	  position: relative;
	}
	:global(.splitpanes.modern-theme) :global(.splitpanes__splitter:before) {
	  content: "";
	  position: absolute;
	  left: 0;
	  top: 0;
	  transition: opacity 0.4s;
	  background-color: #2db9d2;
	  opacity: 0;
	  z-index: 1;
	}
	:global(.splitpanes.modern-theme) :global(.splitpanes__splitter:hover:before) {
	  opacity: 1;
	}
	
	:global(.modern-theme.splitpanes--vertical) > :global(.splitpanes__splitter:before) {
	  left: -3px;
	  right: -3px;
	  height: 100%;
	  cursor: col-resize;
	}
	:global(.modern-theme.splitpanes--horizontal) > :global(.splitpanes__splitter:before) {
	  top: -3px;
	  bottom: -3px;
	  width: 100%;
	  cursor: row-resize;
	}
	
</style>
