// API search index derived from the C++ and Python reference tables in Robot SDK 1.5.0.
const apiEntries = [
  ["C++ · std::invalid_argument","Connection / motion / config ACK failures","./docs/robot-sdk-cpp.html#entry-1"],
  ["C++ · RobotException / kControlLost","Transport unavailable, timeout, keys load failure","./docs/robot-sdk-cpp.html#entry-2"],
  ["C++ · getPos / getStatus","Jog stream send success (execution still async)","./docs/robot-sdk-cpp.html#entry-3"],
  ["C++ · kOk","Success","./docs/robot-sdk-cpp.html#entry-4"],
  ["C++ · kNotStarted","Robot session not started","./docs/robot-sdk-cpp.html#entry-5"],
  ["C++ · kTransportUnavailable","UDP client not ready","./docs/robot-sdk-cpp.html#entry-6"],
  ["C++ · kTimeout","ACK or SrvState wait timeout","./docs/robot-sdk-cpp.html#entry-7"],
  ["C++ · kKeysLoadFailed","Embedded SDK client keys failed to load","./docs/robot-sdk-cpp.html#entry-8"],
  ["C++ · kStartFailed","Wrapped start/stream failure","./docs/robot-sdk-cpp.html#entry-9"],
  ["C++ · kCommandRejectedFaulted","Robot faulted","./docs/robot-sdk-cpp.html#entry-10"],
  ["C++ · kCommandRejectedSequence","Stale sequence ID","./docs/robot-sdk-cpp.html#entry-11"],
  ["C++ · kCommandInvalid","Invalid command payload","./docs/robot-sdk-cpp.html#entry-12"],
  ["C++ · kInvalidClientOrSession","Auth/session mismatch","./docs/robot-sdk-cpp.html#entry-13"],
  ["C++ · kInvalidConfig","Invalid configuration","./docs/robot-sdk-cpp.html#entry-14"],
  ["C++ · kConfigAckFailed","Config ACK failed","./docs/robot-sdk-cpp.html#entry-15"],
  ["C++ · kCommandAckFailed","Command ACK failed","./docs/robot-sdk-cpp.html#entry-16"],
  ["C++ · kControlLost","Used with RobotException only","./docs/robot-sdk-cpp.html#entry-17"],
  ["C++ · kMotionInterrupted","Motion failed or robot entered ERROR while waiting","./docs/robot-sdk-cpp.html#entry-18"],
  ["C++ · kPoseNotReachable","IK or planner could not reach target pose","./docs/robot-sdk-cpp.html#entry-19"],
  ["C++ · kRecoveryFailed","Platform recovery request rejected","./docs/robot-sdk-cpp.html#entry-20"],
  ["C++ · kReleaseControlFailed","Platform release-control request rejected","./docs/robot-sdk-cpp.html#entry-21"],
  ["C++ · kDisconnectFailed","Platform SdkDisconnectReq rejected / timed out (local teardown still proceeds)","./docs/robot-sdk-cpp.html#entry-22"],
  ["C++ · kUnknown","Unmapped platform status","./docs/robot-sdk-cpp.html#entry-23"],
  ["C++ · Robot()","Create SDK client for rt_control networking.","./docs/robot-sdk-cpp.html#entry-24"],
  ["C++ · enumerateRobots()","Probe the network; return vector<DiscoveredRobot>. Call before connect(robot) / connect(info).","./docs/robot-sdk-cpp.html#entry-25"],
  ["C++ · connect(robot), connect(info)","Connect to rt_control via enumerated robot or RtConnectionInfo (empty server_ip auto-discovers).","./docs/robot-sdk-cpp.html#entry-26"],
  ["C++ · disconnect()","Send SdkDisconnectReq, wait for ACK, then stop heartbeats/transport. Next connect() gets a new session.","./docs/robot-sdk-cpp.html#entry-27"],
  ["C++ · armCount() / gripperCount()","Arm / gripper slot counts from RT (0 before connect()).","./docs/robot-sdk-cpp.html#entry-28"],
  ["C++ · robotName()","RT robot_name from config (empty before connect()).","./docs/robot-sdk-cpp.html#entry-29"],
  ["C++ · releaseControl()","Release SDK control token only (session may remain until disconnect/heartbeat timeout).","./docs/robot-sdk-cpp.html#entry-30"],
  ["C++ · stopMotion(wait_for_command_ack=false)","Hold at current pose via Core command; **does not** enter ERROR/Fault. Default: no ACK wait (fastest stop).","./docs/robot-sdk-cpp.html#entry-31"],
  ["C++ · triggerSafeguardStop()","Protective software stop (SdkSafeguardReq on monitoring UDP **8882**, same as Panel abort). Latches until SrvState reports ERROR. Not hardware E-stop.","./docs/robot-sdk-cpp.html#entry-32"],
  ["C++ · getNetworkConfig(out_config, ack_timeout_ms=5000)","Read robot network settings (WiFi password masked). Requires connect().","./docs/robot-sdk-cpp.html#entry-33"],
  ["C++ · setWifi(ssid, password, enable=true, ack_timeout_ms=10000)","Connect robot WiFi to a router (STA mode).","./docs/robot-sdk-cpp.html#entry-34"],
  ["C++ · setEthStatic(eth_ip, eth_netmask, eth_gateway, eth_dns=\"\", ack_timeout_ms=5000)","Set wired static IP (connection drops; reconnect with new IP).","./docs/robot-sdk-cpp.html#entry-35"],
  ["C++ · resetNetworkConfig(ack_timeout_ms=10000)","Restore factory network settings.","./docs/robot-sdk-cpp.html#entry-36"],
  ["C++ · jointCount() / gripperJointCount() / jointNames()","Runtime DOF for arm slot 0; jointNames() returns generic j1…jN from DOF (0 / empty before connect()).","./docs/robot-sdk-cpp.html#entry-37"],
  ["C++ · zeroJoints() / allEnabledMask()","Helpers sized to jointCount() / gripperJointCount().","./docs/robot-sdk-cpp.html#entry-38"],
  ["C++ · enableArmJoint(arm_state)","Enable arm slot 0 joints; JointMask length must match jointCount().","./docs/robot-sdk-cpp.html#entry-39"],
  ["C++ · waitUntilIdle(timeout_sec=30, poll_interval_sec=0.1)","Poll until robot finishes motion or reports failure.","./docs/robot-sdk-cpp.html#entry-40"],
  ["C++ · moveAndWait(move, timeout_sec=30, poll_interval_sec=0.1)","Run a move lambda, then wait until idle.","./docs/robot-sdk-cpp.html#entry-41"],
  ["C++ · movePosAndWait(arm_pos, v=50, t=0, ...)","Arm-0 target arrival (1 degree) plus fresh settled Idle.","./docs/robot-sdk-cpp.html#entry-42"],
  ["C++ · goHomeAndWait(v=50, t=0, ...)","Arm-0 zero-target arrival (1 degree) plus fresh settled Idle.","./docs/robot-sdk-cpp.html#entry-43"],
  ["C++ · setArmSmoothingMethod(method)","Select smoothing strategy for single-target arm motion.","./docs/robot-sdk-cpp.html#entry-44"],
  ["C++ · movePos(arm_pos, v=50, t=0)","Joint-space target for arm slot 0; JointValues length = jointCount().","./docs/robot-sdk-cpp.html#entry-45"],
  ["C++ · movePosPath(path, vPath, tPath)","Joint-space waypoints for arm slot 0; each vector length = jointCount().","./docs/robot-sdk-cpp.html#entry-46"],
  ["C++ · moveVel(arm_vel, a=10, t=0)","Joint-space velocity for arm slot 0; length = jointCount().","./docs/robot-sdk-cpp.html#entry-47"],
  ["C++ · moveEEPoint(pose, v=50, t=0)","Move end-effector to cartesian pose (point mode).","./docs/robot-sdk-cpp.html#entry-48"],
  ["C++ · moveEEPointPath(path, vPath, tPath)","Move through end-effector pose waypoints (point mode).","./docs/robot-sdk-cpp.html#entry-49"],
  ["C++ · moveEELine(pose, v=50, t=0)","Move end-effector to cartesian pose (line mode, arm slot 0).","./docs/robot-sdk-cpp.html#entry-50"],
  ["C++ · moveEELinePath(path, vPath, tPath)","Move through end-effector pose waypoints (line mode, arm slot 0).","./docs/robot-sdk-cpp.html#entry-51"],
  ["C++ · moveToolPoint(pose, v=50, t=0)","Move tool frame to cartesian pose (point mode).","./docs/robot-sdk-cpp.html#entry-52"],
  ["C++ · moveToolPointPath(path, vPath, tPath)","Move tool frame through cartesian waypoints (point mode).","./docs/robot-sdk-cpp.html#entry-53"],
  ["C++ · moveToolLine(pose, v=50, t=0)","Move tool frame to cartesian pose (line mode).","./docs/robot-sdk-cpp.html#entry-54"],
  ["C++ · moveToolLinePath(path, vPath, tPath)","Move tool frame through cartesian waypoints (line mode).","./docs/robot-sdk-cpp.html#entry-55"],
  ["C++ · goHome(v=50, t=0)","Move robot arm to predefined home pose.","./docs/robot-sdk-cpp.html#entry-56"],
  ["C++ · moveGripperPos(pos, v=50, t=0)","Command gripper joints in panel units [0,1] (0=open, 1=close); length = gripperJointCount(). Not soft/hard safety limits.","./docs/robot-sdk-cpp.html#entry-57"],
  ["C++ · moveGripperPosAndWait(pos, …)","moveGripperPos + wait on gripper feedback (RT may stay Idle during gripper-only moves).","./docs/robot-sdk-cpp.html#entry-58"],
  ["C++ · startTeach(), stopRecording(), stopTeach()","Start drag/recording; freeze recording while allowing drag; end teaching with position hold.","./docs/robot-sdk-cpp.html#entry-59"],
  ["C++ · saveTrajectory(local_path)","Export a frozen RT recording to a client-side JSON file; requires a compatible RT.","./docs/robot-sdk-cpp.html#entry-60"],
  ["C++ · startPlayback(), stopPlayback(), resetPlayback()","Control playback mode lifecycle.","./docs/robot-sdk-cpp.html#entry-61"],
  ["C++ · getJointState(), getJointVel(), getJointTor()","Arm slot 0 joint feedback with runtime-sized vectors.","./docs/robot-sdk-cpp.html#entry-62"],
  ["C++ · jointPositions()","Arm slot 0 positions only (JointValues, length = jointCount()).","./docs/robot-sdk-cpp.html#entry-63"],
  ["C++ · getEEPose(), getToolPose()","Arm slot 0 end-effector / tool cartesian pose.","./docs/robot-sdk-cpp.html#entry-64"],
  ["C++ · getArmJointEnabledMask()","Arm slot 0 per-joint enable mask (length = jointCount()).","./docs/robot-sdk-cpp.html#entry-65"],
  ["C++ · getStatus(), printStatus(status)","Read or print aggregated runtime status (SystemStatus). Joint diagnostics are indexed [arm][joint].","./docs/robot-sdk-cpp.html#entry-66"],
  ["C++ · getConnectionStatus() / isConnected()","SDK-owned connection state; autonomous 3000 ms RT receive timeout.","./docs/robot-sdk-cpp.html#entry-67"],
  ["C++ · getConfigurator()","Access RT configuration subsystem for arm slot 0.","./docs/robot-sdk-cpp.html#entry-68"],
  ["C++ · server_ip","\"\" (auto-discover)","./docs/robot-sdk-cpp.html#entry-69"],
  ["C++ · robotIpFromArgs(argc, argv)","Parse optional [IP] or --ip IP from the command line","./docs/robot-sdk-cpp.html#entry-70"],
  ["C++ · connectToRobot(robot, ip)","Connect via RtConnectionInfo::to(ip) when ip is non-empty, else requireFirstRobot()","./docs/robot-sdk-cpp.html#entry-71"],
  ["C++ · requireFirstRobot()","Enumerate and return the first robot (exits if none found)","./docs/robot-sdk-cpp.html#entry-72"],
  ["C++ · ROBOT_CHECK(result, context)","Print and return 1 on failure","./docs/robot-sdk-cpp.html#entry-73"],
  ["C++ · setToolOffset(offset), setArmPosLimits(limit), setArmVelLimits(limit), setGripperPosLimits(limit)","Set configuration; return RobotResult.","./docs/robot-sdk-cpp.html#entry-74"],
  ["C++ · getToolOffset(), getArmPosLimits(), getArmVelLimits(), getGripperPosLimits()","Read active configuration values.","./docs/robot-sdk-cpp.html#entry-75"],
  ["C++ · getArmMaxPos(), getArmMaxVel()","Get hardware max position/velocity constraints.","./docs/robot-sdk-cpp.html#entry-76"],
  ["C++ · getArmMaxPosJump(), getArmMaxVelJump()","Get anti-jump protection limits.","./docs/robot-sdk-cpp.html#entry-77"],
  ["C++ · getArmMaxPosFollowError(), getArmMaxVelFollowError(), getArmMaxTorFollowError()","Get following-error thresholds.","./docs/robot-sdk-cpp.html#entry-78"],
  ["C++ · getGripperMaxPos()","Get gripper hardware max range.","./docs/robot-sdk-cpp.html#entry-79"],
  ["C++ · Kinematics(config_prefix_path, model_id=\"\")","Load built-in model from URDF under config_prefix_path; optional model_id overrides config.yaml / default spark2_v2.","./docs/robot-sdk-cpp.html#entry-80"],
  ["C++ · jointCount()","Active DOF for the loaded kinematics model.","./docs/robot-sdk-cpp.html#entry-81"],
  ["C++ · forwardKinematics(arm_pos)","Compute cartesian pose from joint state (length = jointCount()).","./docs/robot-sdk-cpp.html#entry-82"],
  ["C++ · inverseKinematics(ee_pose, arm_pos)","Solve joint state for a target cartesian pose; returns RobotResult and updates arm_pos on success.","./docs/robot-sdk-cpp.html#entry-83"],
  ["C++ · eulerToQuaternion(euler)","Convert intrinsic XYZ Euler angles to quaternion.","./docs/robot-sdk-cpp.html#entry-84"],
  ["C++ · quaternionToEuler(quat)","Convert quaternion to intrinsic XYZ Euler angles.","./docs/robot-sdk-cpp.html#entry-85"],
  ["C++ · eeToToolPose(ee_pose, tool_offset)","Transform end-effector pose into tool pose.","./docs/robot-sdk-cpp.html#entry-86"],
  ["C++ · toolToEEPose(tool_pose, tool_offset)","Transform tool pose into end-effector pose.","./docs/robot-sdk-cpp.html#entry-87"],
  ["C++ · DiscoveredRobot","Result of enumerateRobots() (server_ip, robot_name, …).","./docs/robot-sdk-cpp.html#entry-88"],
  ["C++ · NetworkConfig","Network settings from getNetworkConfig() (eth_ip, wifi_ssid, …).","./docs/robot-sdk-cpp.html#entry-89"],
  ["C++ · Position / Quaternion / EulerAngle","Cartesian position, orientation, and intrinsic XYZ Euler angles.","./docs/robot-sdk-cpp.html#entry-90"],
  ["C++ · Pose","Cartesian pose = Position + Quaternion orientation.","./docs/robot-sdk-cpp.html#entry-91"],
  ["C++ · JointValues / JointMask / JointState","Variable-length joint vectors, enable masks, and arm+gripper feedback. Length must match jointCount() / gripperJointCount() after connect. Prefer zeroJoints() / makeJointValues().","./docs/robot-sdk-cpp.html#entry-92"],
  ["C++ · JointLimitValues / JointDiagnosticFlags","Variable-length per-joint limit pairs and diagnostic flag vectors.","./docs/robot-sdk-cpp.html#entry-93"],
  ["C++ · makeJointValues(count, fill=0) / makeJointMask(count, enabled=true)","Build vectors sized to runtime DOF.","./docs/robot-sdk-cpp.html#entry-94"],
  ["C++ · makeJointLimitValues(count, fill={-90,90}) / makeJointDiagnosticFlags(count, fill=0)","Build limit/diagnostic vectors sized to runtime DOF.","./docs/robot-sdk-cpp.html#entry-95"],
  ["C++ · Path<T>","Waypoint sequence (std::vector<T>).","./docs/robot-sdk-cpp.html#entry-96"],
  ["C++ · JointLimits<T>","Per-joint min/max limits for arm and gripper.","./docs/robot-sdk-cpp.html#entry-97"],
  ["C++ · SmoothingMethod","kLinear, kCos, kCubic, kQuintic, kQuinticPath, kNone.","./docs/robot-sdk-cpp.html#entry-98"],
  ["C++ · RobotState","kStartup, kIdle, kMoving, kSettling, kError, kRecovery, kShutdown.","./docs/robot-sdk-cpp.html#entry-99"],
  ["C++ · PlanResult","kSuccess, kPoseNotReachable, kLinearPathFailed.","./docs/robot-sdk-cpp.html#entry-100"],
  ["C++ · SystemStatus","Aggregated status: robot_state, plan_result, robot_diagnostic_flags, arm_size, gripper_size, per-arm/per-gripper joint diagnostic flags ([arm][joint]).","./docs/robot-sdk-cpp.html#entry-101"],
  ["C++ · DiagnosticFlags","Bitmask flags for target/actuator saturation, jump limits, boundary safety, planner events, and hardware/tracking faults.","./docs/robot-sdk-cpp.html#entry-102"],
  ["Python · ValueError","Connection / motion / config failures","./docs/robot-sdk-python.html#entry-1"],
  ["Python · RobotError","Jog stream send success (execution still async)","./docs/robot-sdk-python.html#entry-2"],
  ["Python · Robot()","Create SDK client for rt_control networking.","./docs/robot-sdk-python.html#entry-3"],
  ["Python · enumerate_robots()","Probe the network; return List[DiscoveredRobot]. Call before connect(robot) / connect(info).","./docs/robot-sdk-python.html#entry-4"],
  ["Python · connect(robot | info)","Connect via enumerated robot or RtConnectionInfo (empty server_ip auto-discovers).","./docs/robot-sdk-python.html#entry-5"],
  ["Python · disconnect() / stop()","Send session disconnect to RT, then stop heartbeats/transport. stop() aliases disconnect().","./docs/robot-sdk-python.html#entry-6"],
  ["Python · arm_count() / gripper_count()","Arm / gripper slot counts from RT (0 before connect()).","./docs/robot-sdk-python.html#entry-7"],
  ["Python · robot_name()","RT robot identity (empty before connect()).","./docs/robot-sdk-python.html#entry-8"],
  ["Python · joint_count() / gripper_joint_count() / joint_names()","Runtime DOF and names for arm slot 0 (0 / empty before connect()).","./docs/robot-sdk-python.html#entry-9"],
  ["Python · zero_joints() / all_enabled_mask()","Helpers sized to joint_count() / gripper_joint_count().","./docs/robot-sdk-python.html#entry-10"],
  ["Python · release_control()","Release SDK control token; subsequent commands fail until reconnect.","./docs/robot-sdk-python.html#entry-11"],
  ["Python · stop_motion(wait_for_command_ack=False)","Hold at current pose; does not fault the robot.","./docs/robot-sdk-python.html#entry-12"],
  ["Python · trigger_safeguard_stop()","Protective stop (monitoring UDP, Panel abort); enters RT ERROR. Not hardware E-stop.","./docs/robot-sdk-python.html#entry-13"],
  ["Python · get_network_config(ack_timeout_ms=5000.0)","Read robot network settings; returns (RobotResult, NetworkConfig). WiFi password is masked.","./docs/robot-sdk-python.html#entry-14"],
  ["Python · set_wifi(ssid, password, enable=True, ack_timeout_ms=10000.0)","Connect robot WiFi to a router (STA mode).","./docs/robot-sdk-python.html#entry-15"],
  ["Python · set_eth_static(eth_ip, eth_netmask, eth_gateway, eth_dns=\"\", ack_timeout_ms=5000.0)","Set wired static IP (connection drops; reconnect with new IP).","./docs/robot-sdk-python.html#entry-16"],
  ["Python · reset_network_config(ack_timeout_ms=10000.0)","Restore factory network settings.","./docs/robot-sdk-python.html#entry-17"],
  ["Python · enable_arm_joint(arm_state)","Enable arm slot 0; pass a bool list length joint_count().","./docs/robot-sdk-python.html#entry-18"],
  ["Python · wait_until_idle(timeout_sec=30.0, poll_interval_sec=0.1)","Poll until robot finishes motion or reports failure.","./docs/robot-sdk-python.html#entry-19"],
  ["Python · move_and_wait(move, timeout_sec=30.0, poll_interval_sec=0.1)","Run a move callable, then wait until idle.","./docs/robot-sdk-python.html#entry-20"],
  ["Python · move_pos_and_wait(arm_pos, v=50, t=0.0, ...)","move_pos + wait_until_idle (arm slot 0).","./docs/robot-sdk-python.html#entry-21"],
  ["Python · go_home_and_wait(v=50, t=0.0, ...)","go_home + wait_until_idle.","./docs/robot-sdk-python.html#entry-22"],
  ["Python · set_arm_smoothing_method(method)","Select smoothing strategy for single-target arm motion.","./docs/robot-sdk-python.html#entry-23"],
  ["Python · move_pos(arm_pos, v=50, t=0.0)","Joint-space target for arm slot 0; list length = joint_count().","./docs/robot-sdk-python.html#entry-24"],
  ["Python · move_pos_path(path, v_path, t_path)","Joint waypoints for arm slot 0; each list length = joint_count().","./docs/robot-sdk-python.html#entry-25"],
  ["Python · move_vel(arm_vel, a=10, t=0.0)","Joint velocity for arm slot 0; list length = joint_count().","./docs/robot-sdk-python.html#entry-26"],
  ["Python · move_ee_point(pose, v=50, t=0.0)","Move end-effector to cartesian pose (point mode).","./docs/robot-sdk-python.html#entry-27"],
  ["Python · move_ee_point_path(path, v_path, t_path)","Move through end-effector pose waypoints (point mode).","./docs/robot-sdk-python.html#entry-28"],
  ["Python · move_ee_line(pose, v=50, t=0.0)","Move end-effector to cartesian pose (line mode, arm slot 0).","./docs/robot-sdk-python.html#entry-29"],
  ["Python · move_ee_line_path(path, v_path, t_path)","Move through end-effector pose waypoints (line mode, arm slot 0).","./docs/robot-sdk-python.html#entry-30"],
  ["Python · move_tool_point(pose, v=50, t=0.0)","Move tool frame to cartesian pose (point mode).","./docs/robot-sdk-python.html#entry-31"],
  ["Python · move_tool_point_path(path, v_path, t_path)","Move tool frame through cartesian waypoints (point mode).","./docs/robot-sdk-python.html#entry-32"],
  ["Python · move_tool_line(pose, v=50, t=0.0)","Move tool frame to cartesian pose (line mode).","./docs/robot-sdk-python.html#entry-33"],
  ["Python · move_tool_line_path(path, v_path, t_path)","Move tool frame through cartesian waypoints (line mode).","./docs/robot-sdk-python.html#entry-34"],
  ["Python · go_home(v=50, t=0.0)","Move robot arm to predefined home pose.","./docs/robot-sdk-python.html#entry-35"],
  ["Python · move_gripper_pos(pos, v=50, t=0.0)","Gripper joints in panel units [0,1] (0=open, 1=close); list length = gripper_joint_count().","./docs/robot-sdk-python.html#entry-36"],
  ["Python · move_gripper_pos_and_wait(pos, …)","move_gripper_pos + wait on gripper feedback (RT may stay Idle during gripper-only moves).","./docs/robot-sdk-python.html#entry-37"],
  ["Python · start_teach(), stop_recording(), stop_teach()","Start drag/recording; freeze recording while allowing drag; end teaching with position hold.","./docs/robot-sdk-python.html#entry-38"],
  ["Python · save_trajectory(local_path)","Export a frozen RT recording to a client-side JSON file; requires a compatible RT.","./docs/robot-sdk-python.html#entry-39"],
  ["Python · start_playback(), stop_playback(), reset_playback()","Control playback mode lifecycle.","./docs/robot-sdk-python.html#entry-40"],
  ["Python · get_joint_state(), get_joint_vel(), get_joint_tor()","Arm slot 0 joint feedback (runtime-sized vectors).","./docs/robot-sdk-python.html#entry-41"],
  ["Python · joint_positions()","Arm slot 0 positions only.","./docs/robot-sdk-python.html#entry-42"],
  ["Python · get_ee_pose(), get_tool_pose()","Arm slot 0 end-effector / tool cartesian pose.","./docs/robot-sdk-python.html#entry-43"],
  ["Python · get_arm_joint_enabled_mask()","Arm slot 0 enable mask (length joint_count()).","./docs/robot-sdk-python.html#entry-44"],
  ["Python · get_status(), print_status(status)","Read or print aggregated runtime status (SystemStatus). Joint diagnostics are indexed [arm][joint].","./docs/robot-sdk-python.html#entry-45"],
  ["Python · get_configurator()","Access RT configuration subsystem for arm slot 0.","./docs/robot-sdk-python.html#entry-46"],
  ["Python · server_ip","\"\" (auto-discover on connect())","./docs/robot-sdk-python.html#entry-47"],
  ["Python · build_robot_ip_parser()","argparse parser with optional positional [IP]","./docs/robot-sdk-python.html#entry-48"],
  ["Python · get_robot_connection(ip=None)","Returns RtConnectionInfo when ip is set, else the first DiscoveredRobot","./docs/robot-sdk-python.html#entry-49"],
  ["Python · require_first_robot()","Enumerate and return the first robot (exits if none found)","./docs/robot-sdk-python.html#entry-50"],
  ["Python · check_result(result, context)","Print and exit on failure","./docs/robot-sdk-python.html#entry-51"],
  ["Python · set_tool_offset(offset), set_arm_pos_limits(limit), set_arm_vel_limits(limit), set_gripper_pos_limits(limit)","Set configuration; return RobotResult.","./docs/robot-sdk-python.html#entry-52"],
  ["Python · get_tool_offset(), get_arm_pos_limits(), get_arm_vel_limits(), get_gripper_pos_limits()","Read active configuration values.","./docs/robot-sdk-python.html#entry-53"],
  ["Python · get_arm_max_pos(), get_arm_max_vel()","Get hardware max position/velocity constraints.","./docs/robot-sdk-python.html#entry-54"],
  ["Python · get_arm_max_pos_jump(), get_arm_max_vel_jump()","Get anti-jump protection limits.","./docs/robot-sdk-python.html#entry-55"],
  ["Python · get_arm_max_pos_follow_error(), get_arm_max_vel_follow_error(), get_arm_max_tor_follow_error()","Get following-error thresholds.","./docs/robot-sdk-python.html#entry-56"],
  ["Python · set_gripper_pos_limits(limit)","Set gripper position limits; return RobotResult.","./docs/robot-sdk-python.html#entry-57"],
  ["Python · get_gripper_max_pos()","Get gripper hardware max range.","./docs/robot-sdk-python.html#entry-58"],
  ["Python · Kinematics(config_prefix_path, model_id=\"\")","Load built-in model from URDF; optional model_id overrides config.yaml / default spark2_v2.","./docs/robot-sdk-python.html#entry-59"],
  ["Python · joint_count()","Active DOF for the loaded kinematics model.","./docs/robot-sdk-python.html#entry-60"],
  ["Python · forward_kinematics(arm_pos)","Compute cartesian pose from joint state (length = joint_count()).","./docs/robot-sdk-python.html#entry-61"],
  ["Python · inverse_kinematics(ee_pose, arm_pos)","Solve joint state for a target cartesian pose; returns (RobotResult, sequence[float]).","./docs/robot-sdk-python.html#entry-62"],
  ["Python · euler_to_quaternion(euler)","Convert intrinsic XYZ Euler angles to quaternion.","./docs/robot-sdk-python.html#entry-63"],
  ["Python · quaternion_to_euler(quat)","Convert quaternion to intrinsic XYZ Euler angles.","./docs/robot-sdk-python.html#entry-64"],
  ["Python · ee_to_tool_pose(ee_pose, tool_offset)","Transform end-effector pose into tool pose.","./docs/robot-sdk-python.html#entry-65"],
  ["Python · tool_to_ee_pose(tool_pose, tool_offset)","Transform tool pose into end-effector pose.","./docs/robot-sdk-python.html#entry-66"],
  ["Python · DiscoveredRobot","Result of enumerate_robots() (server_ip, robot_name, …).","./docs/robot-sdk-python.html#entry-67"],
  ["Python · NetworkConfig","Network settings from get_network_config() (eth_ip, wifi_ssid, …).","./docs/robot-sdk-python.html#entry-68"],
  ["Python · Position / Quaternion / EulerAngle","Cartesian position, orientation, and intrinsic XYZ Euler angles.","./docs/robot-sdk-python.html#entry-69"],
  ["Python · Pose","Cartesian pose = Position + Quaternion orientation.","./docs/robot-sdk-python.html#entry-70"],
  ["Python · JointValues / JointMask / JointState","Variable-length joint vectors, enable masks, and arm+gripper feedback.","./docs/robot-sdk-python.html#entry-71"],
  ["Python · JointLimitValues / JointDiagnosticFlags","Variable-length per-joint limit pairs and diagnostic flag vectors.","./docs/robot-sdk-python.html#entry-72"],
  ["Python · List[T]","Waypoint sequence (e.g. List[Pose], List[float] for joint paths).","./docs/robot-sdk-python.html#entry-73"],
  ["Python · JointLimits","Per-joint min/max (min, max). Limit getters return JointLimitValues.","./docs/robot-sdk-python.html#entry-74"],
  ["Python · make_joint_values / make_joint_mask / make_joint_limit_values / make_joint_diagnostic_flags","Build runtime-sized vectors.","./docs/robot-sdk-python.html#entry-75"],
  ["Python · SmoothingMethod","LINEAR, COS, CUBIC, QUINTIC, QUINTIC_PATH, NONE.","./docs/robot-sdk-python.html#entry-76"],
  ["Python · RobotState","STARTUP, IDLE, MOVING, SETTLING, ERROR, RECOVERY, SHUTDOWN.","./docs/robot-sdk-python.html#entry-77"],
  ["Python · PlanResult","SUCCESS, POSE_NOT_REACHABLE, LINEAR_PATH_FAILED, NONE. Use is_plan_result_ok() to test success/idle.","./docs/robot-sdk-python.html#entry-78"],
  ["Python · SystemStatus","Aggregated status: robot_state, plan_result, robot_diagnostic_flags, arm_size, gripper_size, per-arm/per-gripper joint diagnostic flags ([arm][joint]).","./docs/robot-sdk-python.html#entry-79"],
  ["Python · DiagnosticFlags","Bitmask flags for target/actuator saturation, jump limits, boundary safety, planner events, and hardware/tracking faults.","./docs/robot-sdk-python.html#entry-80"]
];

const chinese = {
  "startIntro": "按平台下载并完整解压 Robot SDK 1.5.0。以下命令从解压后的 SDK 根目录执行。",
  "windows": "Robot SDK · Windows x64",
  "linux": "Robot SDK · Linux x86_64",
  "wheel": "在 bindings/python/ 中选择与 CPython 版本匹配的 wheel。下例使用 Windows 上的 Python 3.10。",
  "versions": "包内 wheel：Windows 3.9–3.12，Linux 3.9–3.13。",
  "cppBuild": "构建包内示例，将 CMAKE_PREFIX_PATH 指向解压后的 SDK 根目录。",
  "dll": "在 Windows 上运行示例前，将 SDK 的 bin/ 目录加入 PATH。",
  "runNote": "运行运动示例前请阅读包内 docs/USER_GUIDE.md。局域网内有多台机械臂时，请显式传入目标 RT 服务的 IP。未传入 IP 时，示例会连接到首台发现的设备。",
  "kinematicsNote": "离线运动学需要 SDK 指南指定的模型目录，其中包含 arm_v2.urdf 及其网格文件。这两个安装包需要另行获取匹配的模型文件。",
  "quickStart": "快速开始",
  "cppApi": "C++ API 参考",
  "pythonApi": "Python API 参考",
  "apiIntro": "使用下方参考查阅 1.5.0 安装包中的 Robot 接口，包括连接、返回结果、运动、状态反馈和配置。",
  "sdkManuals": "Robot SDK 用户手册",
  "teaching": "示教、录制和轨迹导出",
  "legacyApi": "早期 Spark2 SDK 接口参考",
  "legacyNote": "早期 SDK 项目使用 Spark2 类，可查阅以下接口参考。",
  "legacyCpp": "在线参考",
  "cppManual": "C++ 用户手册",
  "legacyPy": "在线参考",
  "pyManual": "Python 用户手册",
  "api": "SDK 与 API 参考",
  "hardwareText": "安装或操作机械臂前，请阅读 Spark2 用户手册，查阅安全要求、固定方式、电源和接线、坐标系、示教及故障恢复。",
  "hardwareManual": "Spark2 用户手册",
  "mounting": "机械与电气安装",
  "drawings": "机械臂与法兰尺寸图",
  "installation": "安装与使用",
  "modelIntro": "模型包含带夹爪和不带夹爪的 URDF 装配、STL 网格和 MDH 示意图。解压后保留目录结构，以便解析网格路径。",
  "bareArm": "不带夹爪",
  "withGripper": "带夹爪",
  "downloadModel": "Spark2 URDF 模型包",
  "models": "URDF 模型",
  "client": "Robot Client · Windows x64",
  "clientRun": "解压后，在解压目录中打开 run.bat 启动 Robot Client。",
  "sdkLinks": "Robot SDK 1.5.0 安装包",
  "manualDownload": "Spark2 用户手册（PDF）",
  "modelLinks": "URDF 模型包",
  "referenceLinks": "Robot SDK C++ 与 Python 手册",
  "downloads": "资料下载",
  "skip": "跳转到正文",
  "docs": "文档",
  "searchLabel": "搜索文档与接口",
  "onThisPage": "本页目录",
  "reference": "Robot SDK 1.5.0",
  "title": "Spark2 技术文档",
  "intro": "安装和使用机械臂，配置 SDK，或下载模型和手册。",
  "getStarted": "快速开始 →",
  "readApi": "查阅 API 参考",
  "searchResults": "搜索结果",
  "footer": "技术文档"
};

const labels = Array.from(document.querySelectorAll('[data-i18n]'), element => ({
  element,
  english: element.textContent,
}));
const localizedLinks = Array.from(document.querySelectorAll('[data-zh-href]'), link => ({
  link,
  englishHref: link.getAttribute('href'),
}));
const buttons = document.querySelectorAll('[data-lang]');
const search = document.getElementById('doc-search');
const results = document.getElementById('search-results');
const status = document.getElementById('search-status');
const list = document.getElementById('search-list');
const normalize = value => value.toLowerCase().normalize('NFKC').replace(/[_\s-]+/g, '');
let language = 'en';

function updateSearch() {
  const query = normalize(search.value);
  results.hidden = !query;
  list.replaceChildren();
  if (!query) {
    status.textContent = '';
    return;
  }

  const resources = Array.from(document.querySelectorAll('.download-list a'), link => [
    link.querySelector('strong').textContent,
    link.querySelector('small').textContent,
    link.getAttribute('href'),
    link.hasAttribute('download'),
  ]);
  const sections = Array.from(document.querySelectorAll('.doc-section'), section => [
    section.querySelector('h2').textContent,
    section.querySelector('p')?.textContent ?? '',
    '#' + section.id,
  ]);
  const teaching = document.querySelector('[data-i18n="teaching"]');
  const guides = [[teaching.textContent, 'Robot SDK 1.5.0', teaching.getAttribute('href')]];
  const matches = [...resources, ...guides, ...sections, ...apiEntries].filter(([title, description, url]) =>
    normalize(title + ' ' + description + ' ' + url).includes(query));
  const limit = 30;
  const count = Math.min(matches.length, limit);

  if (matches.length) {
    status.textContent = language === 'zh'
      ? '显示 ' + count + ' 项，共 ' + matches.length + ' 项。'
      : 'Showing ' + count + ' of ' + matches.length + ' results.';
  } else {
    status.textContent = language === 'zh' ? '没有匹配项。可尝试文件名或接口名。' : 'No matches. Try a file or method name.';
  }
  for (const [title, description, url, download] of matches.slice(0, limit)) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    const name = document.createElement('strong');
    const summary = document.createElement('span');
    link.href = url;
    if (download) link.download = '';
    name.textContent = title;
    summary.textContent = description.slice(0, 180);
    link.append(name, summary);
    item.append(link);
    list.append(item);
  }
}

function applyLanguage(lang) {
  language = lang === 'zh' ? 'zh' : 'en';
  for (const { element, english } of labels) {
    element.textContent = language === 'zh' ? chinese[element.dataset.i18n] : english;
  }
  for (const { link, englishHref } of localizedLinks) {
    link.setAttribute('href', language === 'zh' ? link.dataset.zhHref : englishHref);
  }
  for (const button of buttons) {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  }
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  search.placeholder = language === 'zh' ? '搜索文件名或接口名…' : 'File or method name…';
  document.title = language === 'zh' ? 'Spark2 · 技术文档' : 'Spark2 · Documentation';
  updateSearch();
  try { localStorage.setItem('spark2-docs-language', language); } catch {}
}

for (const button of buttons) {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
}
search.addEventListener('input', updateSearch);
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('spark2-docs-language') || 'en'; } catch {}
applyLanguage(savedLanguage);
