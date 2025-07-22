import subprocess
import math
import os

def cut_video_with_ffmpeg(input_file, segment_duration_minutes=15, output_prefix="output_segment_"):
    """
    使用 FFmpeg 切割影片，每隔指定分鐘數切割一個片段。
    此版本預設會進行重新編碼以避免切割損壞問題。

    Args:
        input_file (str): 輸入影片的路徑。
        segment_duration_minutes (int): 每個片段的持續時間（分鐘）。
        output_prefix (str): 輸出檔案的前綴。
    """
    segment_duration_seconds = segment_duration_minutes * 60
    
    # 明確指定 ffmpeg 和 ffprobe 的完整路徑
    ffmpeg_bin_path = r"D:\安裝檔\python\ffmpeg-master-latest-win64-gpl-shared\bin"
    ffmpeg_executable = os.path.join(ffmpeg_bin_path, "ffmpeg.exe")
    ffprobe_executable = os.path.join(ffmpeg_bin_path, "ffprobe.exe")

    # 檢查 FFmpeg 和 ffprobe 執行檔是否存在
    if not os.path.exists(ffmpeg_executable):
        print(f"錯誤：找不到 FFmpeg 執行檔於 '{ffmpeg_executable}'。請檢查路徑。")
        return
    if not os.path.exists(ffprobe_executable):
        print(f"錯誤：找不到 ffprobe 執行檔於 '{ffprobe_executable}'。請檢查路徑。")
        return

    # 1. 獲取影片總時長
    try:
        command = [
            ffprobe_executable, 
            "-v", "error",
            "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1",
            input_file
        ]
        total_duration_str = subprocess.check_output(command, universal_newlines=True).strip()
        total_duration = float(total_duration_str)
        print(f"影片總時長: {total_duration:.2f} 秒")
    except (subprocess.CalledProcessError) as e:
        print(f"錯誤：執行 ffprobe 時發生問題。請檢查影片檔案是否損壞或路徑是否正確。錯誤訊息：{e}")
        print(f"ffprobe 輸出：{e.stderr.decode()}")
        return

    # 2. 計算切割點和片段數量
    num_segments = math.ceil(total_duration / segment_duration_seconds)
    print(f"預計切割成 {num_segments} 個片段。")

    # 3. 執行切割
    for i in range(num_segments):
        start_time = i * segment_duration_seconds
        end_time = min((i + 1) * segment_duration_seconds, total_duration)

        output_file = f"{output_prefix}{i:03d}.mp4" 

        # 构建 FFmpeg 命令 (使用重新編碼)
        # 推薦的編解碼器：視訊 H.264 (libx264), 音訊 AAC (aac)
        # -crf 23 是常見的品質設定，值越低品質越高檔案越大
        # -preset veryfast 是編碼速度預設，可以根據需求調整 (ultrafast, superfast, fast, medium, slow, slower, veryslow)
        ffmpeg_command = [
            ffmpeg_executable, 
            "-i", input_file,
            "-ss", str(start_time),
            "-to", str(end_time),
            "-c:v", "libx264",       # 視訊編碼器 H.264
            "-crf", "19",            # 恆定速率因數，23 是一個好的起始點，數字越小畫質越好但檔案越大
            "-preset", "ultrafast",   # 編碼速度預設，可以根據需要調整 (ultrafast, fast, medium, slow 等)
            "-c:a", "aac",           # 音訊編碼器 AAC
            "-b:a", "320k",          # 音訊位元率，例如 192kbps
            "-movflags", "faststart", # 讓影片在網路串流時可以更快開始播放
            output_file
        ]

        print(f"\n切割片段 {i+1}/{num_segments}: 從 {start_time:.2f} 到 {end_time:.2f}，輸出到 {output_file}")
        try:
            subprocess.run(ffmpeg_command, check=True, capture_output=False) 
            print(f"片段 {output_file} 切割完成。")
        except subprocess.CalledProcessError as e:
            print(f"切割片段 {i+1} 時發生錯誤：{e}")
            print(f"FFmpeg 輸出：{e.stderr.decode()}")
            break
        except Exception as e:
            print(f"發生未知錯誤：{e}")
            break

# --- 範例使用 ---
if __name__ == "__main__":
    video_to_cut = r"D:\0\影片\[240531][Queen Bee] 搾精病棟 THE ANIMATION 第8巻 ～キリタニ編～ 後編(No Watermark).mp4" 
    
    if not os.path.exists(video_to_cut):
        print(f"錯誤：找不到影片檔案 '{video_to_cut}'。請檢查路徑。")
    else:
        cut_video_with_ffmpeg(video_to_cut, segment_duration_minutes=15)