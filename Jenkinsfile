Started by user Gideon rabi
Obtained Jenkinsfile from git https://github.com/GideonRabi1319/Web-Docker-CI-Pipeline
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/lib/jenkins/workspace/web docker ci pipeline
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential gideonrabi13
Cloning the remote Git repository
Cloning repository https://github.com/GideonRabi1319/Web-Docker-CI-Pipeline
 > git init /var/lib/jenkins/workspace/web docker ci pipeline # timeout=10
Fetching upstream changes from https://github.com/GideonRabi1319/Web-Docker-CI-Pipeline
 > git --version # timeout=10
 > git --version # 'git version 2.53.0'
using GIT_ASKPASS to set credentials docker-hub-ps
 > git fetch --tags --force --progress -- https://github.com/GideonRabi1319/Web-Docker-CI-Pipeline +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/GideonRabi1319/Web-Docker-CI-Pipeline # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
Avoid second fetch
 > git rev-parse refs/remotes/origin/main^{commit} # timeout=10
Checking out Revision b9c7980e6335931e9d431d778db9b7695a6c47b0 (refs/remotes/origin/main)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f b9c7980e6335931e9d431d778db9b7695a6c47b0 # timeout=10
Commit message: "jenkins name changed"
First time build. Skipping changelog.
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] stage
[Pipeline] { (Declarative: Post Actions)
[Pipeline] sh
Error when executing always post condition:
Also:   org.jenkinsci.plugins.workflow.actions.ErrorAction$ErrorId: e2ab89c4-7fde-448f-86ad-c54908d16003
org.jenkinsci.plugins.workflow.steps.MissingContextVariableException: Required context class hudson.FilePath is missing
Perhaps you forgot to surround the sh step with a step that provides this, such as: node
	at PluginClassLoader for workflow-step-api//org.jenkinsci.plugins.workflow.steps.StepDescriptor.checkContextAvailability(StepDescriptor.java:264)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.DSL.invokeStep(DSL.java:312)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.DSL.invokeMethod(DSL.java:199)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsScript.invokeMethod(CpsScript.java:124)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:98)
	at groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)
	at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1225)
	at groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1034)
	at org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:41)
	at org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)
	at org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)
	at PluginClassLoader for script-security//org.kohsuke.groovy.sandbox.impl.Checker$1.call(Checker.java:180)
	at PluginClassLoader for script-security//org.kohsuke.groovy.sandbox.GroovyInterceptor.onMethodCall(GroovyInterceptor.java:23)
	at PluginClassLoader for script-security//org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.SandboxInterceptor.onMethodCall(SandboxInterceptor.java:163)
	at PluginClassLoader for script-security//org.kohsuke.groovy.sandbox.impl.Checker$1.call(Checker.java:178)
	at PluginClassLoader for script-security//org.kohsuke.groovy.sandbox.impl.Checker.checkedCall(Checker.java:182)
	at PluginClassLoader for script-security//org.kohsuke.groovy.sandbox.impl.Checker.checkedCall(Checker.java:152)
	at PluginClassLoader for workflow-cps//com.cloudbees.groovy.cps.sandbox.SandboxInvoker.methodCall(SandboxInvoker.java:17)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.LoggingInvoker.methodCall(LoggingInvoker.java:124)
	at WorkflowScript.run(WorkflowScript:49)
	at org.jenkinsci.plugins.pipeline.modeldefinition.ModelInterpreter.delegateAndExecute(ModelInterpreter.groovy:139)
	at org.jenkinsci.plugins.pipeline.modeldefinition.ModelInterpreter.runPostConditions(ModelInterpreter.groovy:728)
	at org.jenkinsci.plugins.pipeline.modeldefinition.ModelInterpreter.catchRequiredContextForNode(ModelInterpreter.groovy:390)
	at org.jenkinsci.plugins.pipeline.modeldefinition.ModelInterpreter.runPostConditions(ModelInterpreter.groovy:727)
	at com.cloudbees.groovy.cps.CpsDefaultGroovyMethods.each(CpsDefaultGroovyMethods:2125)
	at com.cloudbees.groovy.cps.CpsDefaultGroovyMethods.each(CpsDefaultGroovyMethods:2110)
	at com.cloudbees.groovy.cps.CpsDefaultGroovyMethods.each(CpsDefaultGroovyMethods:2151)
	at org.jenkinsci.plugins.pipeline.modeldefinition.ModelInterpreter.runPostConditions(ModelInterpreter.groovy:717)
	at org.jenkinsci.plugins.pipeline.modeldefinition.ModelInterpreter.runPostConditions(ModelInterpreter.groovy)
	at org.jenkinsci.plugins.pipeline.modeldefinition.ModelInterpreter.executePostBuild(ModelInterpreter.groovy:695)
	at ___cps.transform___(Native Method)
	at PluginClassLoader for workflow-cps//com.cloudbees.groovy.cps.impl.ContinuationGroup.methodCall(ContinuationGroup.java:107)
	at PluginClassLoader for workflow-cps//com.cloudbees.groovy.cps.impl.FunctionCallBlock$ContinuationImpl.dispatchOrArg(FunctionCallBlock.java:118)
	at PluginClassLoader for workflow-cps//com.cloudbees.groovy.cps.impl.FunctionCallBlock$ContinuationImpl.fixArg(FunctionCallBlock.java:87)
	at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)
	at java.base/java.lang.reflect.Method.invoke(Method.java:580)
	at PluginClassLoader for workflow-cps//com.cloudbees.groovy.cps.impl.ContinuationPtr$ContinuationImpl.receive(ContinuationPtr.java:71)
	at PluginClassLoader for workflow-cps//com.cloudbees.groovy.cps.impl.ConstantBlock.eval(ConstantBlock.java:21)
	at PluginClassLoader for workflow-cps//com.cloudbees.groovy.cps.Next.step(Next.java:84)
	at PluginClassLoader for workflow-cps//com.cloudbees.groovy.cps.Continuable.run0(Continuable.java:142)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.SandboxContinuable.access$001(SandboxContinuable.java:17)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.SandboxContinuable.run0(SandboxContinuable.java:48)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsThread.runNextChunk(CpsThread.java:188)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsThreadGroup.run(CpsThreadGroup.java:464)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsThreadGroup$2.call(CpsThreadGroup.java:372)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsThreadGroup$2.call(CpsThreadGroup.java:302)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsVmExecutorService.lambda$wrap$4(CpsVmExecutorService.java:143)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at hudson.remoting.SingleLaneExecutorService$1.run(SingleLaneExecutorService.java:139)
	at jenkins.util.ContextResettingExecutorService.lambda$wrap$0(ContextResettingExecutorService.java:26)
	at jenkins.security.ImpersonatingExecutorService.lambda$wrap$0(ImpersonatingExecutorService.java:66)
	at jenkins.util.ErrorLoggingExecutorService.lambda$wrap$0(ErrorLoggingExecutorService.java:51)
	at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:572)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:317)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1144)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:642)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsVmExecutorService$1.call(CpsVmExecutorService.java:53)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsVmExecutorService$1.call(CpsVmExecutorService.java:50)
	at org.codehaus.groovy.runtime.GroovyCategorySupport$ThreadCategoryInfo.use(GroovyCategorySupport.java:136)
	at org.codehaus.groovy.runtime.GroovyCategorySupport.use(GroovyCategorySupport.java:275)
	at PluginClassLoader for workflow-cps//org.jenkinsci.plugins.workflow.cps.CpsVmExecutorService.lambda$categoryThreadFactory$0(CpsVmExecutorService.java:50)
	at java.base/java.lang.Thread.run(Thread.java:1583)

[Pipeline] echo
Pipeline failed. Check logs for details.
[Pipeline] }
[Pipeline] // stage
[Pipeline] End of Pipeline
ERROR: docker-hub-ps
Finished: FAILURE