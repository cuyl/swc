if (process.env.NODE_ENV !== "production") {
    var _assign = require("object-assign");
    var ReactVersion;
    var REACT_ELEMENT_TYPE;
    var REACT_PORTAL_TYPE;
    exports.Fragment = null;
    exports.StrictMode = null;
    exports.Profiler = null;
    var REACT_PROVIDER_TYPE;
    var REACT_CONTEXT_TYPE;
    var REACT_FORWARD_REF_TYPE;
    exports.Suspense = null;
    var REACT_SUSPENSE_LIST_TYPE;
    var REACT_MEMO_TYPE;
    var REACT_LAZY_TYPE;
    var REACT_BLOCK_TYPE;
    var REACT_SERVER_BLOCK_TYPE;
    var REACT_FUNDAMENTAL_TYPE;
    var REACT_SCOPE_TYPE;
    var REACT_OPAQUE_ID_TYPE;
    var REACT_DEBUG_TRACING_MODE_TYPE;
    var REACT_OFFSCREEN_TYPE;
    var REACT_LEGACY_HIDDEN_TYPE;
    var symbolFor;
    exports.Fragment = null;
    exports.StrictMode = null;
    exports.Profiler = null;
    exports.Suspense = null;
    var MAYBE_ITERATOR_SYMBOL;
    var FAUX_ITERATOR_SYMBOL;
    var maybeIterator;
    var ReactCurrentDispatcher;
    var ReactCurrentBatchConfig;
    var ReactCurrentOwner;
    var ReactDebugCurrentFrame;
    var currentExtraStackFrame;
    (function() {
        var stack;
        var impl;
    });
    var IsSomeRendererActing;
    var ReactSharedInternals;
    var ReactDebugCurrentFrame1;
    var stack;
    var argsWithFormat;
    var didWarnStateUpdateForUnmountedComponent;
    var _constructor;
    var componentName;
    var warningKey;
    var ReactNoopUpdateQueue;
    var emptyObject;
    var deprecatedAPIs;
    var defineDeprecationWarning;
    var fnName;
    var pureComponentPrototype;
    var refObject;
    var functionName;
    switch(null){
        case exports.Fragment:
        case exports.Profiler:
        case exports.StrictMode:
        case exports.Suspense:
    }
    switch(null){
        case null:
            var context;
        case null:
            var provider;
        case null:
            var lazyComponent;
            var payload;
            var init;
    }
    var hasOwnProperty;
    var RESERVED_PROPS;
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    var getter;
    var getter1;
    var warnAboutAccessingKey;
    var warnAboutAccessingRef;
    var componentName1;
    var ReactElement = function() {
        var element;
    };
    var propName;
    var props;
    var key;
    var ref;
    var self;
    var source;
    var childrenLength;
    var childArray;
    var defaultProps;
    var displayName;
    var newElement;
    var propName1;
    var props1;
    var key1;
    var ref1;
    var self1;
    var source1;
    var owner;
    var defaultProps1;
    var childrenLength1;
    var childArray1;
    var SEPARATOR;
    var SUBSEPARATOR;
    var escapeRegex;
    var escaperLookup;
    var escapedString;
    var didWarnAboutMaps;
    var userProvidedKeyEscapeRegex;
    var type;
    var invokeCallback;
    var _child;
    var mappedChild;
    var childKey;
    var escapedChildKey;
    var child;
    var nextName;
    var subtreeCount;
    var nextNamePrefix;
    var iteratorFn;
    var iterableChildren;
    var iterator;
    var step;
    var ii;
    var childrenString;
    var result;
    var count;
    var n;
    var context1;
    var hasWarnedAboutUsingNestedContextConsumers;
    var hasWarnedAboutUsingConsumerProvider;
    var hasWarnedAboutDisplayNameOnConsumer;
    var Consumer;
    var Uninitialized;
    var Pending;
    var Resolved;
    var Rejected;
    var ctor;
    var thenable;
    var pending;
    (function() {
        var defaultExport;
        var resolved;
    }), function() {
        var rejected;
    };
    var payload1;
    var lazyType;
    var defaultProps2;
    var propTypes;
    var elementType;
    var ownName;
    var enableScopeAPI;
    exports.Fragment, exports.Profiler, exports.StrictMode, exports.Suspense;
    var elementType1;
    var ownName1;
    var dispatcher;
    var dispatcher1;
    var realContext;
    var dispatcher2;
    var dispatcher3;
    var dispatcher4;
    var dispatcher5;
    var dispatcher6;
    var dispatcher7;
    var dispatcher8;
    var dispatcher9;
    var dispatcher10;
    var disabledDepth;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    var props2;
    var props3;
    var ReactCurrentDispatcher$1;
    var prefix;
    var match;
    var reentry;
    var componentFrameCache;
    var PossiblyWeakMap;
    var frame;
    var control;
    var previousPrepareStackTrace;
    var previousDispatcher;
    var Fake;
    var sampleLines;
    var controlLines;
    var s;
    var c;
    var _frame;
    var name;
    var syntheticFrame;
    var prototype;
    switch(null){
        case exports.Suspense:
    }
    switch(null){
        case null:
            var lazyComponent1;
            var payload2;
            var init1;
    }
    var loggedTypeFailures;
    var ReactDebugCurrentFrame$1;
    var owner1;
    var stack1;
    var has;
    var typeSpecName;
    var error$1;
    var err;
    var owner2;
    var stack2;
    var propTypesMisspellWarningShown;
    var name1;
    var fileName;
    var lineNumber;
    var ownerHasKeyUseWarning;
    var info;
    var parentName;
    var currentComponentErrorInfo;
    var childOwner;
    var child1;
    var iteratorFn1;
    var iterator1;
    var step1;
    var type1;
    var propTypes1;
    var name2;
    var _name;
    var keys;
    var key2;
    var validType;
    var info1;
    var sourceInfo;
    var typeString;
    var element;
    exports.Fragment;
    var didWarnAboutDeprecatedCreateFactory;
    var validatedFactory;
    var newElement1;
    var frozenObject;
    var createElement$1;
    var cloneElement$1;
    var createFactory;
    var Children;
    exports.Children = null;
    exports.Component = null;
    exports.PureComponent = null;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = null;
    exports.cloneElement = null;
    exports.createContext = null;
    exports.createElement = null;
    exports.createFactory = null;
    exports.createRef = null;
    exports.forwardRef = null;
    exports.isValidElement = null;
    exports.lazy = null;
    exports.memo = null;
    exports.useCallback = null;
    exports.useContext = null;
    exports.useDebugValue = null;
    exports.useEffect = null;
    exports.useImperativeHandle = null;
    exports.useLayoutEffect = null;
    exports.useMemo = null;
    exports.useReducer = null;
    exports.useRef = null;
    exports.useState = null;
    exports.version = null;
}
