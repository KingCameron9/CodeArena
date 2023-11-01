import { d as set_current_component, r as run_all, f as current_component, c as create_ssr_component, s as setContext, h as createEventDispatcher, a as validate_store, b as subscribe, i as set_store_value, o as onDestroy, j as add_attribute, e as escape, v as validate_component, g as getContext, k as hasContext, l as compute_rest_props, n as each, m as missing_component, p as noop } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { BROWSER } from "esm-env-robust";
import "@monaco-editor/loader";
import "../../../chunks/firebase.js";
import { Slugger, Lexer } from "marked";
import { d as docWrite, s as secondsToTime } from "../../../chunks/utils.js";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import "vm-browserify";
import { S as State } from "../../../chunks/types.js";
import JSConfetti from "js-confetti";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const gatheringKey = {};
const GatheringRound = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext(gatheringKey, true);
  return `${slots.default ? slots.default({}) : ``}`;
});
function pxToNumber(pxString) {
  if (!pxString.endsWith("px")) {
    return void 0;
  }
  const num = parseFloat(pxString.slice(0, pxString.length - 2));
  return isNaN(num) ? void 0 : num;
}
const getDimensionName = (horizontal) => horizontal ? "height" : "width";
const calcComputedStyle = (element) => /* @__PURE__ */ window.getComputedStyle(element);
const getElementRect = (element) => /* @__PURE__ */ element.getBoundingClientRect();
const getBordersSizeOffsets = (computedStyle, calcEnds = true) => {
  if (computedStyle.getPropertyValue("box-sizing") === "border-box") {
    return void 0;
  }
  const left = pxToNumber(computedStyle.getPropertyValue("border-left-width"));
  if (left === void 0) {
    console.error("Splitpanes Error: Fail to parse container `border-left-width`.");
    return void 0;
  }
  const top = pxToNumber(computedStyle.getPropertyValue("border-top-width"));
  if (top === void 0) {
    console.error("Splitpanes Error: Fail to parse container `border-top-width`.");
    return void 0;
  }
  const result = { left, top };
  if (calcEnds) {
    const right = pxToNumber(computedStyle.getPropertyValue("border-right-width"));
    if (right === void 0) {
      console.error("Splitpanes Error: Fail to parse container `border-right-width`.");
      return void 0;
    }
    const bottom = pxToNumber(computedStyle.getPropertyValue("border-bottom-width"));
    if (bottom === void 0) {
      console.error("Splitpanes Error: Fail to parse container `border-bottom-width`.");
      return void 0;
    }
    const resultExtended = result;
    resultExtended.right = right;
    resultExtended.bottom = bottom;
  }
  return result;
};
function elementRectWithoutBorder(element, computedStyle) {
  if (!computedStyle) {
    computedStyle = calcComputedStyle(element);
  }
  const rect = getElementRect(element);
  const borderOffsets = getBordersSizeOffsets(computedStyle, true) || { left: 0, top: 0, right: 0, bottom: 0 };
  return {
    width: rect.width - borderOffsets.left - borderOffsets.right,
    height: rect.height - borderOffsets.top - borderOffsets.bottom,
    left: rect.left + borderOffsets.left,
    top: rect.top + borderOffsets.top
  };
}
const positionDiff = (to, from) => ({
  left: to.left - from.left,
  top: to.top - from.top
});
function getGlobalMousePosition(event) {
  const eventMouse = event;
  const eventTouch = event;
  const { clientX, clientY } = "ontouchstart" in window && eventTouch.touches ? eventTouch.touches[0] : eventMouse;
  return { left: clientX, top: clientY };
}
function sumPartial(arr, start, end, valueFunction) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += valueFunction(arr[i], i);
  }
  return sum;
}
function forEachPartial(arr, start, end, callback) {
  for (let i = start; i < end; i++) {
    callback(arr[i], i);
  }
}
const Splitpanes_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'div.splitpanes--horizontal.splitpanes--dragging{cursor:row-resize}div.splitpanes--vertical.splitpanes--dragging{cursor:col-resize}.splitpanes{display:flex;width:100%;height:100%}.splitpanes--vertical{flex-direction:row}.splitpanes--horizontal{flex-direction:column}.splitpanes--dragging *{user-select:none}.splitpanes__pane{width:100%;height:100%;overflow:hidden}.splitpanes--vertical .splitpanes__pane{transition:width 0.2s ease-out}.splitpanes--horizontal .splitpanes__pane{transition:height 0.2s ease-out}.splitpanes--vertical>.splitpanes__pane{transition:width 0.2s ease-out}.splitpanes--horizontal>.splitpanes__pane{transition:height 0.2s ease-out}.splitpanes--dragging .splitpanes__pane{transition:none;pointer-events:none}.splitpanes--freeze .splitpanes__pane{transition:none}.splitpanes__splitter{touch-action:none}.splitpanes--vertical>.splitpanes__splitter{min-width:1px}.splitpanes--horizontal>.splitpanes__splitter{min-height:1px}.splitpanes.default-theme .splitpanes__pane{background-color:#f2f2f2}.splitpanes.default-theme .splitpanes__splitter{background-color:#fff;box-sizing:border-box;position:relative;flex-shrink:0}.splitpanes.default-theme .splitpanes__splitter:before,.splitpanes.default-theme .splitpanes__splitter:after{content:"";position:absolute;top:50%;left:50%;background-color:rgba(0, 0, 0, 0.15);transition:background-color 0.3s}.splitpanes.default-theme .splitpanes__splitter:hover:before,.splitpanes.default-theme .splitpanes__splitter:hover:after{background-color:rgba(0, 0, 0, 0.25)}.splitpanes.default-theme .splitpanes__splitter:first-child{cursor:auto}.default-theme.splitpanes .splitpanes .splitpanes__splitter{z-index:1}.default-theme.splitpanes--vertical>.splitpanes__splitter,.default-theme .splitpanes--vertical>.splitpanes__splitter{width:7px;border-left:1px solid #eee;cursor:col-resize}.default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:after{transform:translateY(-50%);width:1px;height:30px}.default-theme.splitpanes--vertical>.splitpanes__splitter:before,.default-theme .splitpanes--vertical>.splitpanes__splitter:before{margin-left:-2px}.default-theme.splitpanes--vertical>.splitpanes__splitter:after,.default-theme .splitpanes--vertical>.splitpanes__splitter:after{margin-left:1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter,.default-theme .splitpanes--horizontal>.splitpanes__splitter{height:7px;border-top:1px solid #eee;cursor:row-resize}.default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after{transform:translateX(-50%);width:30px;height:1px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:before,.default-theme .splitpanes--horizontal>.splitpanes__splitter:before{margin-top:-2px}.default-theme.splitpanes--horizontal>.splitpanes__splitter:after,.default-theme .splitpanes--horizontal>.splitpanes__splitter:after{margin-top:1px}',
  map: null
};
const KEY = {};
const Splitpanes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $veryFirstPaneKey, $$unsubscribe_veryFirstPaneKey;
  let $showFirstSplitter, $$unsubscribe_showFirstSplitter;
  let $isHorizontal, $$unsubscribe_isHorizontal;
  let { id = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { pushOtherPanes = true } = $$props;
  let { dblClickSplitter = true } = $$props;
  let { rtl = "auto" } = $$props;
  let { firstSplitter = false } = $$props;
  let { style = null } = $$props;
  let { theme = "default-theme" } = $$props;
  let { class: clazz = "" } = $$props;
  const dispatch = createEventDispatcher();
  let container;
  let isReady = false;
  let isAwaitingPaneReset = false;
  let isMouseDown = false;
  let isDragging = false;
  let activeSplitter = -1;
  let clickedSplitter = -1;
  let timeoutId;
  let panes = new Array();
  let isHorizontal = writable(horizontal);
  validate_store(isHorizontal, "isHorizontal");
  $$unsubscribe_isHorizontal = subscribe(isHorizontal, (value) => $isHorizontal = value);
  const showFirstSplitter = writable(firstSplitter);
  validate_store(showFirstSplitter, "showFirstSplitter");
  $$unsubscribe_showFirstSplitter = subscribe(showFirstSplitter, (value) => $showFirstSplitter = value);
  const veryFirstPaneKey = writable(void 0);
  validate_store(veryFirstPaneKey, "veryFirstPaneKey");
  $$unsubscribe_veryFirstPaneKey = subscribe(veryFirstPaneKey, (value) => $veryFirstPaneKey = value);
  let activeSplitterElement = null;
  let activeSplitterDrag = null;
  let ssrPaneDefinedSizeSum = 0;
  let ssrPaneUndefinedSizeCount = 0;
  function ssrRegisterPaneSize(size) {
    if (size == null) {
      ++ssrPaneUndefinedSizeCount;
    } else {
      ssrPaneDefinedSizeSum += size;
    }
  }
  const onPaneInit = (key2) => {
    if ($veryFirstPaneKey === void 0) {
      set_store_value(veryFirstPaneKey, $veryFirstPaneKey = key2, $veryFirstPaneKey);
    }
    return {
      undefinedPaneInitSize: BROWSER ? 0 : (100 - ssrPaneDefinedSizeSum) / ssrPaneUndefinedSizeCount
    };
  };
  setContext(KEY, {
    showFirstSplitter,
    veryFirstPaneKey,
    isHorizontal,
    ssrRegisterPaneSize: BROWSER ? void 0 : ssrRegisterPaneSize,
    onPaneInit,
    clientOnly: BROWSER ? { onPaneAdd, onPaneRemove } : void 0
  });
  function onPaneAdd(pane) {
    let index = -1;
    Array.from(pane.element.parentNode.children).some((el) => {
      if (el.className.includes("splitpanes__pane"))
        index++;
      return el === pane.element;
    });
    if (index === 0) {
      set_store_value(veryFirstPaneKey, $veryFirstPaneKey = pane.key, $veryFirstPaneKey);
    }
    panes.splice(index, 0, pane);
    for (let i = 0; i < panes.length; i++) {
      panes[i].index = i;
    }
    if (isReady) {
      tickAndResetPaneSizes().then(() => {
        pane.isReady = true;
        dispatch("pane-add", { index, panes: prepareSizeEvent() });
      });
    }
    const paneForward = (cb, includingFirst = true) => (value) => {
      if (includingFirst || pane.index > 0) {
        cb(value, pane);
      }
    };
    return {
      onSplitterDown: paneForward(onMouseDown, false),
      onSplitterClick: paneForward(onSplitterClick, false),
      onSplitterDblClick: paneForward(onSplitterDblClick),
      onPaneClick: paneForward(onPaneClick),
      reportGivenSizeChange: paneForward(reportGivenSizeChange)
    };
  }
  async function onPaneRemove(key2) {
    const index = panes.findIndex((p) => p.key === key2);
    if (index >= 0) {
      const removed = panes.splice(index, 1)[0];
      for (let i = 0; i < panes.length; i++) {
        panes[i].index = i;
      }
      if (index === 0) {
        set_store_value(veryFirstPaneKey, $veryFirstPaneKey = panes.length > 0 ? panes[0].key : void 0, $veryFirstPaneKey);
      }
      if (isReady) {
        await tickAndResetPaneSizes();
        dispatch("pane-remove", { removed, panes: prepareSizeEvent() });
      }
    }
  }
  function onPaneClick(_event, pane) {
    dispatch("pane-click", pane);
  }
  function reportGivenSizeChange(newGivenSize, pane) {
    pane.setSz(newGivenSize);
    tickAndResetPaneSizes();
  }
  if (BROWSER) {
    onDestroy(() => {
      if (isReady) {
        unbindEvents();
      }
      isReady = false;
    });
  }
  function isRTL(containerComputedStyle) {
    if (rtl === "auto") {
      try {
        return (containerComputedStyle ?? calcComputedStyle(container)).direction === "rtl";
      } catch (err) {
      }
    }
    return rtl === true;
  }
  function bindEvents() {
    document.body.style.cursor = isHorizontal ? "col-resize" : "row-resize";
    document.addEventListener("mousemove", onMouseMove, { passive: false });
    document.addEventListener("mouseup", onMouseUp);
    if ("ontouchstart" in window) {
      document.addEventListener("touchmove", onMouseMove, { passive: false });
      document.addEventListener("touchend", onMouseUp);
    }
  }
  function unbindEvents() {
    document.body.style.cursor = "";
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    if ("ontouchstart" in window) {
      document.removeEventListener("touchmove", onMouseMove);
      document.removeEventListener("touchend", onMouseUp);
    }
  }
  const isSplitterElement = (node) => node.nodeType === Node.ELEMENT_NODE && node.classList.contains("splitpanes__splitter");
  function getOrientedDiff(drag, elementSize, isRTL2) {
    let tdrag = drag[horizontal ? "top" : "left"];
    if (isRTL2 && !horizontal)
      tdrag = elementSize - tdrag;
    return tdrag;
  }
  const getCurrentDimensionName = () => getDimensionName(horizontal);
  function onMouseDown(event, splitterPane) {
    isMouseDown = true;
    activeSplitter = splitterPane.index;
    splitterPane.setSplitterActive(true);
    const paneElement = splitterPane.element;
    let activeSplitterNode = paneElement;
    while (activeSplitterNode != null) {
      activeSplitterNode = activeSplitterNode.previousSibling;
      if (isSplitterElement(activeSplitterNode)) {
        break;
      }
    }
    if (activeSplitterNode == null) {
      console.error("Splitpane Error: Active splitter wasn't found!");
      return;
    }
    activeSplitterElement = activeSplitterNode;
    const globalMousePosition = getGlobalMousePosition(event);
    const splitterRect = getElementRect(activeSplitterElement);
    activeSplitterDrag = getOrientedDiff(positionDiff(globalMousePosition, splitterRect), splitterRect[getCurrentDimensionName()], isRTL());
    bindEvents();
  }
  function onMouseMove(event) {
    if (isMouseDown) {
      event.preventDefault();
      isDragging = true;
      const globalMousePosition = getGlobalMousePosition(event);
      const containerComputedStyle = calcComputedStyle(container);
      const containerRectWithoutBorder = elementRectWithoutBorder(container, containerComputedStyle);
      const containerSizeWithoutBorder = containerRectWithoutBorder[getCurrentDimensionName()];
      const _isRTL = isRTL(containerComputedStyle);
      const currentMouseDrag = positionDiff(globalMousePosition, containerRectWithoutBorder);
      const tdrag = getOrientedDiff(currentMouseDrag, containerSizeWithoutBorder, _isRTL);
      calculatePanesSize(tdrag, containerSizeWithoutBorder);
      dispatch("resize", prepareSizeEvent());
    }
  }
  function onMouseUp() {
    if (isDragging) {
      dispatch("resized", prepareSizeEvent());
    }
    isMouseDown = false;
    const pane = panes[activeSplitter];
    pane.setSplitterActive(false);
    setTimeout(
      () => {
        isDragging = false;
        unbindEvents();
      },
      100
    );
  }
  function onSplitterClick(event, splitterPane) {
    if ("ontouchstart" in window) {
      event.preventDefault();
      const splitterIndex = splitterPane.index;
      if (dblClickSplitter) {
        if (clickedSplitter === splitterIndex) {
          if (timeoutId)
            clearTimeout(timeoutId);
          timeoutId = null;
          onSplitterDblClick(event, splitterPane);
          clickedSplitter = -1;
        } else {
          clickedSplitter = splitterIndex;
          timeoutId = setTimeout(
            () => {
              clickedSplitter = -1;
            },
            500
          );
        }
      }
    }
    if (!isDragging)
      dispatch("splitter-click", splitterPane);
  }
  function onSplitterDblClick(_event, splitterPane) {
    if (dblClickSplitter) {
      const splitterIndex = splitterPane.index;
      let totalMinSizes = 0;
      for (let i = 0; i < panes.length; i++) {
        const pane = panes[i];
        if (i !== splitterIndex) {
          totalMinSizes += pane.min();
        }
      }
      const maxExtendedSize = Math.min(Math.max(0, 100 - totalMinSizes), splitterPane.max());
      const totalMaxExtendedPlusMinSizes = totalMinSizes + maxExtendedSize;
      if (totalMaxExtendedPlusMinSizes >= 100) {
        for (let i = 0; i < panes.length; i++) {
          const pane = panes[i];
          if (pane !== splitterPane) {
            pane.setSz(pane.min());
          } else {
            pane.setSz(100 - totalMinSizes);
          }
        }
      } else {
        let leftSpare = 100 - totalMaxExtendedPlusMinSizes;
        splitterPane.setSz(maxExtendedSize);
        const giveBest = (pane) => {
          const min = pane.min();
          const max = pane.max();
          const szExtra = Math.min(Math.max(0, leftSpare), max - min);
          pane.setSz(min + szExtra);
          leftSpare -= szExtra;
        };
        for (let i = splitterIndex - 1; i >= 0; i--)
          giveBest(panes[i]);
        for (let i = splitterIndex + 1; i < panes.length; i++)
          giveBest(panes[i]);
        if (leftSpare != 0) {
          console.warn("Splitpanes: there is a left spare size after computation of splitter double click, which means there are issues on the size constains of the panes.");
        }
      }
      dispatch("pane-maximize", splitterPane);
      dispatch("resized", prepareSizeEvent());
    }
    isMouseDown = false;
  }
  const prepareSizeEvent = () => panes.map((pane) => ({
    min: pane.min(),
    max: pane.max(),
    size: pane.sz(),
    snap: pane.snap()
  }));
  function getCurrentDragPercentage(tdrag, containerSizeWithoutBorder) {
    const splitterSize = (node) => getElementRect(node)[getCurrentDimensionName()];
    const activeSplitterSize = splitterSize(activeSplitterElement);
    let splittersTotalSizeBefore = 0;
    let currentBeforeNode = activeSplitterElement.previousSibling;
    while (currentBeforeNode != null) {
      if (isSplitterElement(currentBeforeNode)) {
        splittersTotalSizeBefore += splitterSize(currentBeforeNode);
      }
      currentBeforeNode = currentBeforeNode.previousSibling;
    }
    let splittersTotalSizeAfter = 0;
    let currentAfterNode = activeSplitterElement.nextSibling;
    while (currentAfterNode != null) {
      if (isSplitterElement(currentAfterNode)) {
        splittersTotalSizeAfter += splitterSize(currentAfterNode);
      }
      currentAfterNode = currentAfterNode.nextSibling;
    }
    const totalSplitterBefore = splittersTotalSizeBefore + activeSplitterDrag;
    const totalSplitter = splittersTotalSizeBefore + activeSplitterSize + splittersTotalSizeAfter;
    return (tdrag - totalSplitterBefore) / (containerSizeWithoutBorder - totalSplitter) * 100;
  }
  function calculatePanesSize(tdrag, containerSizeWithoutBorder) {
    let paneBeforeIndex = activeSplitter - 1;
    let paneBefore = panes[paneBeforeIndex];
    let paneAfterIndex = activeSplitter;
    let paneAfter = panes[paneAfterIndex];
    let sums = {
      prevPanesSize: sumPrevPanesSize(paneBeforeIndex),
      nextPanesSize: sumNextPanesSize(paneAfterIndex),
      prevReachedMinPanes: 0,
      nextReachedMinPanes: 0
    };
    const minDrag = 0 + (pushOtherPanes ? 0 : sums.prevPanesSize);
    const maxDrag = 100 - (pushOtherPanes ? 0 : sums.nextPanesSize);
    const mouseDragPercentage = Math.max(Math.min(getCurrentDragPercentage(tdrag, containerSizeWithoutBorder), maxDrag), minDrag);
    const paneBeforeSnap = sums.prevPanesSize + paneBefore.min() + paneBefore.snap();
    const paneAfterSnap = 100 - (sums.nextPanesSize + paneAfter.min() + paneAfter.snap());
    let dragPercentage = mouseDragPercentage;
    let snapped = false;
    if (mouseDragPercentage <= paneBeforeSnap) {
      if (mouseDragPercentage > sums.prevPanesSize + paneBefore.min()) {
        dragPercentage = Math.max(paneBefore.min() + sums.prevPanesSize, 100 - (paneAfter.max() + sums.nextPanesSize));
        snapped = true;
      }
    } else if (mouseDragPercentage >= paneAfterSnap) {
      if (mouseDragPercentage < 100 - sums.nextPanesSize - paneAfter.min()) {
        dragPercentage = Math.min(100 - (paneAfter.min() + sums.nextPanesSize), paneBefore.max() + sums.prevPanesSize);
        snapped = true;
      }
    }
    const paneBeforeMaxReached = paneBefore.max() < 100 && dragPercentage >= paneBefore.max() + sums.prevPanesSize;
    const paneAfterMaxReached = paneAfter.max() < 100 && dragPercentage <= 100 - (paneAfter.max() + sums.nextPanesSize);
    if (paneBeforeMaxReached || paneAfterMaxReached) {
      if (paneBeforeMaxReached) {
        paneBefore.setSz(paneBefore.max());
        paneAfter.setSz(Math.max(100 - paneBefore.max() - sums.prevPanesSize - sums.nextPanesSize, 0));
      } else {
        paneBefore.setSz(Math.max(100 - paneAfter.max() - sums.prevPanesSize - sums.nextPanesSize, 0));
        paneAfter.setSz(paneAfter.max());
      }
    } else {
      if (pushOtherPanes && !snapped) {
        const vars = doPushOtherPanes(sums, dragPercentage);
        if (!vars) {
          return;
        }
        ({ sums, paneBeforeIndex, paneAfterIndex } = vars);
        paneBefore = panes[paneBeforeIndex];
        paneAfter = panes[paneAfterIndex];
      }
      if (paneBeforeIndex != null) {
        paneBefore.setSz(Math.min(Math.max(dragPercentage - sums.prevPanesSize - sums.prevReachedMinPanes, paneBefore.min()), paneBefore.max()));
      }
      if (paneAfterIndex != null) {
        paneAfter.setSz(Math.min(Math.max(100 - dragPercentage - sums.nextPanesSize - sums.nextReachedMinPanes, paneAfter.min()), paneAfter.max()));
      }
    }
  }
  function doPushOtherPanes(sums, dragPercentage) {
    const splitterIndex = activeSplitter - 1;
    let paneBeforeIndex = splitterIndex;
    let paneAfterIndex = splitterIndex + 1;
    if (dragPercentage < sums.prevPanesSize + panes[paneBeforeIndex].min()) {
      paneBeforeIndex = findPrevExpandedPane(splitterIndex)?.index;
      sums.prevReachedMinPanes = 0;
      if (paneBeforeIndex < splitterIndex) {
        forEachPartial(panes, paneBeforeIndex + 1, splitterIndex + 1, (pane) => {
          pane.setSz(pane.min());
          sums.prevReachedMinPanes += pane.min();
        });
      }
      sums.prevPanesSize = sumPrevPanesSize(paneBeforeIndex);
      if (paneBeforeIndex == null) {
        sums.prevReachedMinPanes = 0;
        panes[0].setSz(panes[0].min());
        forEachPartial(panes, 1, splitterIndex + 1, (pane) => {
          pane.setSz(pane.min());
          sums.prevReachedMinPanes += pane.min();
        });
        panes[paneAfterIndex].setSz(100 - sums.prevReachedMinPanes - panes[0].min() - sums.prevPanesSize - sums.nextPanesSize);
        return null;
      }
    }
    if (dragPercentage > 100 - sums.nextPanesSize - panes[paneAfterIndex].min()) {
      paneAfterIndex = findNextExpandedPane(splitterIndex)?.index;
      sums.nextReachedMinPanes = 0;
      if (paneAfterIndex > splitterIndex + 1) {
        forEachPartial(panes, splitterIndex + 1, paneAfterIndex, (pane) => {
          pane.setSz(pane.min());
          sums.nextReachedMinPanes += pane.min();
        });
      }
      sums.nextPanesSize = sumNextPanesSize(paneAfterIndex);
      const panesCount = panes.length;
      if (paneAfterIndex == null) {
        sums.nextReachedMinPanes = 0;
        panes[panesCount - 1].setSz(panes[panesCount - 1].min());
        forEachPartial(panes, splitterIndex + 1, panesCount - 1, (pane) => {
          pane.setSz(pane.min());
          sums.nextReachedMinPanes += pane.min();
        });
        panes[paneBeforeIndex].setSz(100 - sums.prevPanesSize - sums.nextReachedMinPanes - panes[panesCount - 1].min() - sums.nextPanesSize);
        return null;
      }
    }
    return { sums, paneBeforeIndex, paneAfterIndex };
  }
  const getSizeOfPane = (pane) => pane.sz();
  const sumPrevPanesSize = (splitterIndex) => sumPartial(panes, 0, splitterIndex, getSizeOfPane);
  const sumNextPanesSize = (splitterIndex) => sumPartial(panes, splitterIndex + 1, panes.length, getSizeOfPane);
  const findPrevExpandedPane = (splitterIndex) => [...panes].reverse().find((p) => p.index < splitterIndex && p.sz() > p.min());
  const findNextExpandedPane = (splitterIndex) => panes.find((p) => p.index > splitterIndex + 1 && p.sz() > p.min());
  async function tickAndResetPaneSizes() {
    isAwaitingPaneReset = true;
    await tick();
    if (isAwaitingPaneReset) {
      resetPaneSizes();
      isAwaitingPaneReset = false;
    }
  }
  function resetPaneSizes() {
    equalize();
    if (isReady)
      dispatch("resized", prepareSizeEvent());
  }
  function equalize() {
    if (panes.length === 0) {
      return;
    }
    const panesCount = panes.length;
    let leftToAllocate = 100;
    let definedSizesCount = 0;
    let undefinedSizesNotReadyCount = 0;
    let undefinedSizesSum = 0;
    let ungrowable = [];
    let unshrinkable = [];
    for (let i = 0; i < panesCount; i++) {
      const pane = panes[i];
      const sz = pane.sz();
      if (pane.givenSize == null) {
        if (pane.isReady) {
          undefinedSizesSum += sz;
          if (sz >= pane.max())
            ungrowable.push(pane);
          if (sz <= pane.min())
            unshrinkable.push(pane);
        } else {
          undefinedSizesNotReadyCount += 1;
        }
      } else {
        leftToAllocate -= sz;
        definedSizesCount++;
        ungrowable.push(pane);
        unshrinkable.push(pane);
      }
    }
    const undefinedSizesCount = panesCount - definedSizesCount;
    const undefinedSizesReadyCount = undefinedSizesCount - undefinedSizesNotReadyCount;
    let undefinedSizesNotReadySz;
    let undefinedScaleFactor;
    if (undefinedSizesReadyCount > 0) {
      undefinedSizesNotReadySz = undefinedSizesSum / undefinedSizesReadyCount;
      if (undefinedSizesNotReadySz > 0.1 && leftToAllocate > 0.1) {
        undefinedSizesSum += undefinedSizesNotReadyCount * undefinedSizesNotReadySz;
        undefinedScaleFactor = leftToAllocate / undefinedSizesSum;
      } else {
        undefinedSizesNotReadySz = 0;
        undefinedScaleFactor = 1;
      }
    } else {
      undefinedSizesNotReadySz = leftToAllocate / undefinedSizesCount;
      undefinedScaleFactor = 1;
    }
    if (leftToAllocate + undefinedSizesSum > 0.1) {
      leftToAllocate = 100;
      for (let i = 0; i < panesCount; i++) {
        const pane = panes[i];
        if (pane.givenSize == null) {
          const currentSz = pane.isReady ? pane.sz() : undefinedSizesNotReadySz;
          const sz = Math.max(Math.min(currentSz * undefinedScaleFactor, pane.max()), pane.min());
          pane.setSz(sz);
        }
        leftToAllocate -= pane.sz();
      }
      if (Math.abs(leftToAllocate) > 0.1) {
        leftToAllocate = readjustSizes(leftToAllocate, ungrowable, unshrinkable);
      }
    }
    if (!isFinite(leftToAllocate)) {
      console.warn("Splitpanes: Internal error, sizes might be NaN as a result.");
    } else if (Math.abs(leftToAllocate) > 0.1) {
      console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }
  }
  function readjustSizes(leftToAllocate, ungrowable, unshrinkable) {
    const panesCount = panes.length;
    const panesSizableCount = panesCount - (leftToAllocate > 0 ? ungrowable.length : unshrinkable.length);
    if (panesSizableCount <= 0) {
      return leftToAllocate;
    }
    const equalSpaceToAllocate = leftToAllocate / panesSizableCount;
    if (panes.length === 1) {
      panes[0].setSz(100);
      leftToAllocate = 0;
    } else
      for (let i = 0; i < panes.length; i++) {
        const pane = panes[i];
        const sz = pane.sz();
        if (leftToAllocate > 0 && !ungrowable.includes(pane)) {
          const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
          const allocated = newPaneSize - sz;
          leftToAllocate -= allocated;
          pane.setSz(newPaneSize);
        } else if (!unshrinkable.includes(pane)) {
          const newPaneSize = Math.max(Math.min(sz + equalSpaceToAllocate, pane.max()), pane.min());
          const allocated = newPaneSize - sz;
          leftToAllocate -= allocated;
          pane.setSz(newPaneSize);
        }
      }
    return leftToAllocate;
  }
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.pushOtherPanes === void 0 && $$bindings.pushOtherPanes && pushOtherPanes !== void 0)
    $$bindings.pushOtherPanes(pushOtherPanes);
  if ($$props.dblClickSplitter === void 0 && $$bindings.dblClickSplitter && dblClickSplitter !== void 0)
    $$bindings.dblClickSplitter(dblClickSplitter);
  if ($$props.rtl === void 0 && $$bindings.rtl && rtl !== void 0)
    $$bindings.rtl(rtl);
  if ($$props.firstSplitter === void 0 && $$bindings.firstSplitter && firstSplitter !== void 0)
    $$bindings.firstSplitter(firstSplitter);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  $$result.css.add(css$3);
  set_store_value(isHorizontal, $isHorizontal = horizontal, $isHorizontal);
  set_store_value(showFirstSplitter, $showFirstSplitter = firstSplitter, $showFirstSplitter);
  $$unsubscribe_veryFirstPaneKey();
  $$unsubscribe_showFirstSplitter();
  $$unsubscribe_isHorizontal();
  return `<div${add_attribute("id", id, 0)} class="${[
    escape(`splitpanes ${theme || ""} ${clazz || ""}`, true),
    (horizontal ? "splitpanes--horizontal" : "") + " " + (!horizontal ? "splitpanes--vertical" : "") + " " + (isMouseDown || isDragging ? "splitpanes--dragging" : "") + " splitpanes--freeze"
  ].join(" ").trim()}"${add_attribute("style", style, 0)}${add_attribute("this", container, 0)}>${!BROWSER ? `${validate_component(GatheringRound, "GatheringRound").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : ``} ${slots.default ? slots.default({}) : ``} </div>`;
});
const carefullCallbackGenerator = (callbackObjectGetter, callbackName) => (value) => {
  const callbackObject = callbackObjectGetter();
  if (callbackObject != null) {
    callbackObject[callbackName](value);
  }
};
const carefullCallbackSource = (callbackObjectGetter) => carefullCallbackGenerator.bind(null, callbackObjectGetter);
const Pane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dimension;
  let style;
  let $isHorizontal, $$unsubscribe_isHorizontal;
  let $veryFirstPaneKey, $$unsubscribe_veryFirstPaneKey;
  let $showFirstSplitter, $$unsubscribe_showFirstSplitter;
  const { ssrRegisterPaneSize, onPaneInit, clientOnly: clientOnlyContext, isHorizontal, showFirstSplitter, veryFirstPaneKey } = getContext(KEY);
  validate_store(isHorizontal, "isHorizontal");
  $$unsubscribe_isHorizontal = subscribe(isHorizontal, (value) => $isHorizontal = value);
  validate_store(showFirstSplitter, "showFirstSplitter");
  $$unsubscribe_showFirstSplitter = subscribe(showFirstSplitter, (value) => $showFirstSplitter = value);
  validate_store(veryFirstPaneKey, "veryFirstPaneKey");
  $$unsubscribe_veryFirstPaneKey = subscribe(veryFirstPaneKey, (value) => $veryFirstPaneKey = value);
  let { size = null } = $$props;
  let { minSize = 0 } = $$props;
  let { maxSize = 100 } = $$props;
  let { snapSize = 0 } = $$props;
  let { class: clazz = "" } = $$props;
  const key2 = {};
  const gathering = !BROWSER && hasContext(gatheringKey);
  const { undefinedPaneInitSize } = !gathering ? onPaneInit(key2) : {};
  let element;
  let sz = size ?? undefinedPaneInitSize;
  let clientCallbacks = void 0;
  const carefullClientCallbacks = BROWSER ? carefullCallbackSource(() => clientCallbacks) : void 0;
  const reportGivenSizeChangeSafe = (size2) => {
    if (size2 != sz) {
      carefullClientCallbacks("reportGivenSizeChange")(size2);
    }
  };
  if (gathering) {
    ssrRegisterPaneSize(size);
  } else if (BROWSER) {
    onDestroy(() => {
      clientOnlyContext.onPaneRemove(key2);
    });
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.minSize === void 0 && $$bindings.minSize && minSize !== void 0)
    $$bindings.minSize(minSize);
  if ($$props.maxSize === void 0 && $$bindings.maxSize && maxSize !== void 0)
    $$bindings.maxSize(maxSize);
  if ($$props.snapSize === void 0 && $$bindings.snapSize && snapSize !== void 0)
    $$bindings.snapSize(snapSize);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  {
    {
      if (BROWSER && size != null) {
        reportGivenSizeChangeSafe(size);
      }
    }
  }
  dimension = getDimensionName($isHorizontal);
  style = `${dimension}: ${sz}%;`;
  $$unsubscribe_isHorizontal();
  $$unsubscribe_veryFirstPaneKey();
  $$unsubscribe_showFirstSplitter();
  return `${!gathering ? ` ${$veryFirstPaneKey !== key2 || $showFirstSplitter ? `   <div class="${"splitpanes__splitter " + escape("", true)}"></div>` : ``}     <div${add_attribute("class", `splitpanes__pane ${clazz || ""}`, 0)}${add_attribute("style", style, 0)}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
let editor;
const Monaco = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let editorContainer;
  onDestroy(() => {
  });
  return `<div style="height: 100vh;"${add_attribute("this", editorContainer, 0)}></div>`;
});
function supressWarnings() {
  const origWarn = console.warn;
  console.warn = (message) => {
    if (message.includes("unknown prop"))
      return;
    if (message.includes("unexpected slot"))
      return;
    origWarn(message);
  };
}
const Parser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "tokens", "header", "rows", "ordered", "renderers"]);
  let { type = void 0 } = $$props;
  let { tokens = void 0 } = $$props;
  let { header = void 0 } = $$props;
  let { rows = void 0 } = $$props;
  let { ordered = false } = $$props;
  let { renderers } = $$props;
  supressWarnings();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  return `${!type ? `${each(tokens, (token) => {
    return `${validate_component(Parser, "svelte:self").$$render($$result, Object.assign({}, token, { renderers }), {}, {})}`;
  })}` : `${renderers[type] ? `${type === "table" ? `${validate_component(renderers.table || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(renderers.tablehead || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
            default: () => {
              return `${each(header, (headerItem, i) => {
                return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                  $$result,
                  {
                    header: true,
                    align: $$restProps.align[i] || "center"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: headerItem.tokens, renderers }, {}, {})} `;
                    }
                  }
                )}`;
              })}`;
            }
          })}`;
        }
      })} ${validate_component(renderers.tablebody || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${each(rows, (row) => {
            return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
              default: () => {
                return `${each(row, (cells, i) => {
                  return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                    $$result,
                    {
                      header: false,
                      align: $$restProps.align[i] || "center"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: cells.tokens, renderers }, {}, {})} `;
                      }
                    }
                  )}`;
                })} `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}` : `${type === "list" ? `${ordered ? `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({}, { ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.orderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign({}, item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})} `;
          }
        })}`;
      })}`;
    }
  })}` : `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({}, { ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.unorderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign({}, item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})} `;
          }
        })}`;
      })}`;
    }
  })}`}` : `${validate_component(renderers[type] || missing_component, "svelte:component").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${tokens ? `${validate_component(Parser, "svelte:self").$$render($$result, { tokens, renderers }, {}, {})}` : `${escape($$restProps.raw)}`}`;
    }
  })}`}`}` : ``}`}`;
});
const key = {};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let { depth } = $$props;
  let { raw } = $$props;
  let { text } = $$props;
  const { slug, getOptions } = getContext(key);
  const options = getOptions();
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
    $$bindings.depth(depth);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  id = options.headerIds ? options.headerPrefix + slug(text) : void 0;
  return `${depth === 1 ? `<h1${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${depth === 2 ? `<h2${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${depth === 3 ? `<h3${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${depth === 4 ? `<h4${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${depth === 5 ? `<h5${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${depth === 6 ? `<h6${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${escape(raw)}`}`}`}`}`}`}`;
});
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>${slots.default ? slots.default({}) : ``}</p>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { raw } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  let { text = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<img${add_attribute("src", href, 0)}${add_attribute("title", title, 0)}${add_attribute("alt", text, 0)}>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", href, 0)}${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<em>${slots.default ? slots.default({}) : ``}</em>`;
});
const Del = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<del>${slots.default ? slots.default({}) : ``}</del>`;
});
const Codespan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { raw } = $$props;
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `<code>${escape(raw.replace(/`/g, ""))}</code>`;
});
const Strong = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<strong>${slots.default ? slots.default({}) : ``}</strong>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<table>${slots.default ? slots.default({}) : ``}</table>`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<thead>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tbody>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tr>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { align } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  return `${header ? `<th${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</th>` : `<td${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ordered } = $$props;
  let { start } = $$props;
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  return `${ordered ? `<ol${add_attribute("start", start, 0)}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
});
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  let { text } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<pre${add_attribute("class", lang, 0)}><code>${escape(text)}</code></pre>`;
});
const Br = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<br>${slots.default ? slots.default({}) : ``}`;
});
const defaultRenderers = {
  heading: Heading,
  paragraph: Paragraph,
  text: Text,
  image: Image,
  link: Link,
  em: Em,
  strong: Strong,
  codespan: Codespan,
  del: Del,
  table: Table,
  tablehead: TableHead,
  tablebody: TableBody,
  tablerow: TableRow,
  tablecell: TableCell,
  list: List,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: ListItem,
  hr: Hr,
  html: Html,
  blockquote: Blockquote,
  code: Code,
  br: Br
};
const defaultOptions = {
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  renderer: null,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  xhtml: false
};
const SvelteMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let preprocessed;
  let slugger;
  let combinedOptions;
  let combinedRenderers;
  let { source = [] } = $$props;
  let { renderers = {} } = $$props;
  let { options = {} } = $$props;
  let { isInline = false } = $$props;
  const dispatch = createEventDispatcher();
  let tokens;
  let lexer;
  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : "",
    getOptions: () => combinedOptions
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
    $$bindings.isInline(isInline);
  preprocessed = Array.isArray(source);
  slugger = source ? new Slugger() : void 0;
  combinedOptions = { ...defaultOptions, ...options };
  {
    if (preprocessed) {
      tokens = source;
    } else {
      lexer = new Lexer(combinedOptions);
      tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
      dispatch("parsed", { tokens });
    }
  }
  combinedRenderers = { ...defaultRenderers, ...renderers };
  return `${validate_component(Parser, "Parser").$$render($$result, { tokens, renderers: combinedRenderers }, {}, {})}`;
});
const Docs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let source = "# Docs";
  questionStore.subscribe((value) => {
    console.log(value);
    source = value.docs;
  });
  function setDocText(md) {
    source = md;
  }
  if ($$props.setDocText === void 0 && $$bindings.setDocText && setDocText !== void 0)
    $$bindings.setDocText(setDocText);
  return `<div style="height: 100%; width: 100%; color:lightgray">${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div>`;
});
let initialQuestion = {
  ready: false,
  solutionFun: () => {
  },
  default: "",
  tests: [[]],
  docs: ""
};
const questionStore = writable(initialQuestion);
async function setQuestion(question) {
  questionStore.set(question);
  {
    setTimeout(() => {
      editor.setValue(question.default);
    }, 2e3);
  }
}
const defaultJoinInfo = {
  code: "",
  name: ""
};
const joinInfo = writable(defaultJoinInfo);
const questionNumber = writable(0);
questionNumber.subscribe((val) => {
  console.log("question Number: " + val);
});
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $player, $$unsubscribe_player = noop, $$subscribe_player = () => ($$unsubscribe_player(), $$unsubscribe_player = subscribe(player, ($$value) => $player = $$value), player);
  let $joinInfo, $$unsubscribe_joinInfo;
  let $game, $$unsubscribe_game = noop, $$subscribe_game = () => ($$unsubscribe_game(), $$unsubscribe_game = subscribe(game, ($$value) => $game = $$value), game);
  validate_store(joinInfo, "joinInfo");
  $$unsubscribe_joinInfo = subscribe(joinInfo, (value) => $joinInfo = value);
  let player;
  let game;
  let questions = [];
  if ($joinInfo.code != "" && $joinInfo.name != "") {
    $$subscribe_player(player = docWrite("/games/" + $joinInfo.code + "/players/" + $joinInfo.name));
    console.log($joinInfo.code);
    $$subscribe_game(game = docWrite("/games/" + $joinInfo.code));
    getDoc(doc(getFirestore(), "/games/" + $joinInfo.code)).then((raw) => {
      let text = raw.data().questions;
      questions = JSON.parse(text);
      setQuestion(questions[0]);
      questionNumber.subscribe((qi) => {
        set_store_value(player, $player.points = qi, $player);
        setQuestion(questions[qi]);
      });
    });
  }
  $$unsubscribe_player();
  $$unsubscribe_joinInfo();
  $$unsubscribe_game();
  return `<div style="color: white; font-size: 20px;"><h2 data-svelte-h="svelte-1w1ztdk">Game</h2> <p>Time left: ${escape(secondsToTime($game?.time))}</p> <p>questions completed: ${escape($player?.points | 0)} / 3</p> <p>Code: ${escape($joinInfo.code)}</p> <p>Name: ${escape($joinInfo.name)}</p></div>`;
});
const Output_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#start-button.s-oZPPynbHK0W8{background-color:rgb(45,45,45);color:white;border:none;padding:10px 15px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;border-radius:8px;transition:background-color 0.3s ease}#start-button.s-oZPPynbHK0W8:hover{background-color:rgb(50,50,50)}",
  map: null
};
const Output = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_questionNumber;
  let $questionStore, $$unsubscribe_questionStore;
  validate_store(questionNumber, "questionNumber");
  $$unsubscribe_questionNumber = subscribe(questionNumber, (value) => value);
  validate_store(questionStore, "questionStore");
  $$unsubscribe_questionStore = subscribe(questionStore, (value) => $questionStore = value);
  $$result.css.add(css$2);
  $$unsubscribe_questionNumber();
  $$unsubscribe_questionStore();
  return `${$questionStore.ready ? `<button id="start-button" class="s-oZPPynbHK0W8" data-svelte-h="svelte-c5v8d9">run</button> <button data-svelte-h="svelte-1yuo66x">skip</button>` : ``} ${`<p style="color: white" data-svelte-h="svelte-ccgj84">Run some code to see it&#39;s output</p>`}`;
});
const Workspace_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.splitpanes.modern-theme .splitpanes__pane{background-color:#1E1E1E}.splitpanes.modern-theme .splitpanes__splitter{background-color:#ccc;position:relative}.splitpanes.modern-theme .splitpanes__splitter:before{content:"";position:absolute;left:0;top:0;transition:opacity 0.4s;background-color:#2db9d2;opacity:0;z-index:1}.splitpanes.modern-theme .splitpanes__splitter:hover:before{opacity:1}.modern-theme.splitpanes--vertical>.splitpanes__splitter:before{left:-3px;right:-3px;height:100%;cursor:col-resize}.modern-theme.splitpanes--horizontal>.splitpanes__splitter:before{top:-3px;bottom:-3px;width:100%;cursor:row-resize}',
  map: null
};
const Workspace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div style="height: 100vh">${validate_component(Splitpanes, "Splitpanes").$$render(
    $$result,
    {
      theme: "no-splitter",
      horizontal: true,
      style: "height: 100%",
      dblClickSplitter: false
    },
    {},
    {
      default: () => {
        return `${validate_component(Pane, "Pane").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { theme: "modern-theme" }, {}, {
              default: () => {
                return `${validate_component(Pane, "Pane").$$render($$result, { size: 35 }, {}, {
                  default: () => {
                    return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true, theme: "modern-theme" }, {}, {
                      default: () => {
                        return `${validate_component(Pane, "Pane").$$render($$result, { size: 15 }, {}, {
                          default: () => {
                            return `${validate_component(Game, "Game").$$render($$result, {}, {}, {})}`;
                          }
                        })} ${validate_component(Pane, "Pane").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Docs, "Docs").$$render($$result, {}, {}, {})}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Pane, "Pane").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Splitpanes, "Splitpanes").$$render($$result, { horizontal: true, theme: "modern-theme" }, {}, {
                      default: () => {
                        return `${validate_component(Pane, "Pane").$$render($$result, { size: 80 }, {}, {
                          default: () => {
                            return `${validate_component(Monaco, "Monaco").$$render($$result, {}, {}, {})}`;
                          }
                        })} ${validate_component(Pane, "Pane").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Output, "Output").$$render($$result, {}, {}, {})}`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    }
  )} </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".lds-ellipsis.s-G_44JrUNJz-e.s-G_44JrUNJz-e{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis.s-G_44JrUNJz-e div.s-G_44JrUNJz-e{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#fff;animation-timing-function:cubic-bezier(0, 1, 1, 0)}.lds-ellipsis.s-G_44JrUNJz-e div.s-G_44JrUNJz-e:nth-child(1){left:8px;animation:s-G_44JrUNJz-e-lds-ellipsis1 0.6s infinite}.lds-ellipsis.s-G_44JrUNJz-e div.s-G_44JrUNJz-e:nth-child(2){left:8px;animation:s-G_44JrUNJz-e-lds-ellipsis2 0.6s infinite}.lds-ellipsis.s-G_44JrUNJz-e div.s-G_44JrUNJz-e:nth-child(3){left:32px;animation:s-G_44JrUNJz-e-lds-ellipsis2 0.6s infinite}.lds-ellipsis.s-G_44JrUNJz-e div.s-G_44JrUNJz-e:nth-child(4){left:56px;animation:s-G_44JrUNJz-e-lds-ellipsis3 0.6s infinite}@keyframes s-G_44JrUNJz-e-lds-ellipsis1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes s-G_44JrUNJz-e-lds-ellipsis3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes s-G_44JrUNJz-e-lds-ellipsis2{0%{transform:translate(0, 0)}100%{transform:translate(24px, 0)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $game, $$unsubscribe_game = noop, $$subscribe_game = () => ($$unsubscribe_game(), $$unsubscribe_game = subscribe(game, ($$value) => $game = $$value), game);
  let $player, $$unsubscribe_player = noop, $$subscribe_player = () => ($$unsubscribe_player(), $$unsubscribe_player = subscribe(player, ($$value) => $player = $$value), player);
  let $joinInfo, $$unsubscribe_joinInfo;
  validate_store(joinInfo, "joinInfo");
  $$unsubscribe_joinInfo = subscribe(joinInfo, (value) => $joinInfo = value);
  let game = null;
  validate_store(game, "game");
  $$subscribe_game();
  let player = null;
  validate_store(player, "player");
  $$subscribe_player();
  let show = false;
  if ($joinInfo.code == "" || $joinInfo.name == "")
    ;
  else {
    show = true;
    $$subscribe_game(game = docWrite("/games/" + $joinInfo.code));
    $$subscribe_player(player = docWrite("/games/" + $joinInfo.code + "/players/" + $joinInfo.name));
  }
  let confeti = false;
  player?.subscribe((val) => {
    if (val?.points === 3 && !confeti) {
      confeti = true;
      console.log("it was done");
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      $player.points == $game.time + 1e3;
      set_store_value(player, $player.finished = true, $player);
      set_store_value(player, $player.finishedTime = Math.abs($game.time - 100), $player);
    }
  });
  $$result.css.add(css);
  $$unsubscribe_game();
  $$unsubscribe_player();
  $$unsubscribe_joinInfo();
  return `${show ? `${$game?.state == State.playing ? `${$player?.points === 3 ? `<div style="background-color: rgb(30,30,30); display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; flex-direction: column;">${$game?.time > 1 ? `<p style="color: white; font-size: 30px" data-svelte-h="svelte-ti8i1b">Congrats, You finished all the problems! Wait till the end to see how you did!</p> <p style="color:white">Time left: ${escape(secondsToTime($game?.time))}</p> <div class="lds-ellipsis s-G_44JrUNJz-e"><div class="s-G_44JrUNJz-e"></div><div class="s-G_44JrUNJz-e"></div><div class="s-G_44JrUNJz-e"></div><div class="s-G_44JrUNJz-e"></div></div>` : `<p style="color: white; font-size: 30px" data-svelte-h="svelte-1w1atph">Look up to the board to see how you did</p>`}</div>` : `${validate_component(Workspace, "Workspace").$$render($$result, {}, {}, {})}`}` : `<div style="background-color: rgb(30,30,30); display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; flex-direction: column;"><p style="color: white; font-size: 30px" data-svelte-h="svelte-16b6mg6">Waiting for host to start</p> <div class="lds-ellipsis s-G_44JrUNJz-e"><div class="s-G_44JrUNJz-e"></div><div class="s-G_44JrUNJz-e"></div><div class="s-G_44JrUNJz-e"></div><div class="s-G_44JrUNJz-e"></div></div></div>`}` : ``}`;
});
export {
  Page as default
};
